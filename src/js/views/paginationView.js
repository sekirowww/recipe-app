import View from './View';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElm = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElm.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goPage = +btn.dataset.goto;
      handler(goPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const pagesNum = Math.ceil(
      this._data.results.length / this._data.resultPage
    );

    // ----------in page 1, have other pages-------------
    if (curPage === 1 && pagesNum > 1) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;
    }

    // ---------------in last page-----------------
    if (curPage === pagesNum && pagesNum > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>`;
    }

    // -------------------other-------------------------
    if (curPage < pagesNum) {
      return `
        <button data-goto="${
          curPage - 1
        }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }"class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }

    // in page 1, no other page
    return '';
  }
}

export default new paginationView();
