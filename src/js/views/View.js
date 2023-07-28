import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.displayError();

    this._data = data;
    const sign = this._generateMarkup();
    if (!render) return sign;

    this._clear();
    this._parentElm.insertAdjacentHTML('afterbegin', sign);
  }

  _clear() {
    this._parentElm.innerHTML = '';
  }

  update(data) {
    this._data = data;
    const newSign = this._generateMarkup();

    const newDom = document.createRange().createContextualFragment(newSign);
    const newElm = Array.from(newDom.querySelectorAll('*'));
    const curElm = Array.from(this._parentElm.querySelectorAll('*'));

    newElm.forEach((newElms, i) => {
      const curELms = curElm[i];

      if (
        !newElms.isEqualNode(curELms) &&
        newElms.firstChild?.nodeValue.trim() !== ''
      ) {
        curELms.textContent = newElms.textContent;
      }

      if (!newElms.isEqualNode(curELms)) {
        Array.from(newElms.attributes).forEach(attr =>
          curELms.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  // ------------------display spinner-----------------
  displaySpinner() {
    this._parentElm.innerHTML = '';

    const sign = `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
            </div>`;

    this._parentElm.insertAdjacentHTML('afterbegin', sign);
  }

  displayError(msg = this._errorMsg) {
    const sign = `
    <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${msg}</p>
    </div>`;

    this._parentElm.innerHTML = '';
    this._parentElm.insertAdjacentHTML('afterbegin', sign);
  }

  displayMsg(msg = this._successMsg) {
    const sign = `
    <div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${msg}</p>
    </div>`;

    this._parentElm.innerHTML = '';
    this._parentElm.insertAdjacentHTML('afterbegin', sign);
  }
}
