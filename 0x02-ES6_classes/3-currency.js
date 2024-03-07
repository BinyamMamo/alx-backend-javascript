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
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }
  
  // getter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }
  
  // setters
  // setter for code
  set code(c) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = c;
  }
  
  // setter for name
  set name(n) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = n;
  }
}
