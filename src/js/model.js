import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, API_KEY } from './config';
import { getJson, sendJson } from './helpers';

export const state = {
  recipe: {},
  search: {
    results: [],
    query: '',
    page: 1,
    resultPage: RES_PER_PAGE,
  },
  bookmark: [],
};

const addRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}/${id}?key=${API_KEY}`);

    state.recipe = addRecipeObject(data);

    if (state.bookmark.some(bm => bm.id === id)) state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResult = async function (query) {
  try {
    const data = await getJson(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.query = query;

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 8888888`);
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultPage;
  const end = page * state.search.resultPage;

  return state.search.results.slice(start, end);
};

export const updateServing = function (newserving) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newserving) / state.recipe.servings;
  });

  state.recipe.servings = newserving;
};

const persistBookmark = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
};

export const addBookmark = function (recipe) {
  //---------------add bookmark------------------
  state.bookmark.push(recipe);

  //---------------mark current recipe as bookmark----------------
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmark();
};

export const removeBookmark = function (id) {
  const index = state.bookmark.findIndex(el => el.id === id);
  state.bookmark.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmark();
};

const init = function () {
  const storage = localStorage.getItem('bookmark');
  if (storage) state.bookmark = JSON.parse(storage);
};
init();

const clearBookmark = function () {
  localStorage.clear('bookmark');
};
//clearBookmark();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredient = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            ' Wrong ingredient format. Please use the correat format! '
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredient,
    };

    const data = await sendJson(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = addRecipeObject(data);
    //addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
