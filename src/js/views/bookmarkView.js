import View from './View';
import icons from 'url:../../img/icons.svg';

class BookmarkView extends View {
  _parentElm = document.querySelector('.bookmarks__list');
  _errorMsg = 'No bookmarks yet, go find a recipe you love!';
  _successMsg = '';

  addHandlerDisplay(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(results) {
    return `
      <li class="preview">
        <a class="preview__link " href="#${results.id}">
          <figure class="preview__fig">
          <img src="${results.image}" alt="${results.title}" />
          </figure>
          <div class="preview__data">
          <h4 class="preview__title">${results.title}</h4>
          <p class="preview__publisher">${results.publisher}</p>
          </div>
        </a>
      </li>
      `;
  }
}

export default new BookmarkView();
