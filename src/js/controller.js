import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

/////////////////////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.displaySpinner();

    bookmarkView.update(model.state.bookmark);

    // ------------------loading recipe-----------------
    await model.loadRecipe(id);

    // ------------------Displaying recipe------------------
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.displayError();
    console.error(err);
  }
};

const controlSearchResult = async function () {
  try {
    resultView.displaySpinner();

    // ---------------get search query-----------------------
    const query = searchView.getQuery();
    if (!query) return;

    // --------------load search results--------------------
    await model.loadSearchResult(query);

    // --------------render results------------------------
    resultView.render(model.getSearchResultPage(1));

    // -------------display pagination btn------------------
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goPage) {
  // --------------display new results------------------------
  resultView.render(model.getSearchResultPage(goPage));

  // -------------display new pagination btn------------------
  paginationView.render(model.state.search);
};

const controlServing = function (newserving) {
  //------------update serving-----------------
  model.updateServing(newserving);

  //------------update recipe view-------------
  //recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarkView.render(model.state.bookmark);
};

const controlBookmark = function () {
  bookmarkView.render(model.state.bookmark);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.displaySpinner();

    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //----------------display recipe----------------
    recipeView.render(model.state.recipe);

    //--------------display success message-------------
    addRecipeView.displayMsg();

    //----------------change url id------------------
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //-----------------close window-----------------
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, 2000);
  } catch (err) {
    console.error(err);
    addRecipeView.displayError(err.message);
  }
};

const newFeature = function () {
  console.log('welcome');
};

const init = function () {
  bookmarkView.addHandlerDisplay(controlBookmark);
  recipeView.addHandlerDisplay(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServing);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView._addHandlerUpload(controlAddRecipe);
  newFeature();
};
init();
