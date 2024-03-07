export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Displays the full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
  
  /* eslint-disable no-underscore-dangle */
  // getters
  get code() { return this._code; }
  get name() { return this._name; }

  // setters
  set code(c) { this._code = c; }
  set name(n) { this._name = n; }
  /* eslint-enable no-underscore-dangle */
}
