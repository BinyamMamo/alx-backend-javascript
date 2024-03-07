export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') throw new Error();
    this._name = name;
    this._code = code;
  }

  get name() { return this._name; }
  get code() { return this._code;}
  get [Symbol.toStringTag]() { return this.code; }

  set name(value) { this._name = value; }
  set code(value) { this._code = value; }
}
