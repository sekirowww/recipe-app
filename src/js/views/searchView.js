class SearchView {
  _parentElm = document.querySelector('.search');

  getQuery() {
    const query = this._parentElm.querySelector('.search__field').value;
    this._clearInputField();
    return query;
  }

  _clearInputField() {
    this._parentElm.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
