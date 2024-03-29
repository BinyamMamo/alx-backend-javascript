export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Displays the full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for code
  set code(c) {
    this._code = c;
  }

  // setter for name
  set name(n) {
    this._name = n;
  }
}
