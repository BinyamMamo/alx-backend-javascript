/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') throw new TypeError('Size must be a number');
    if (typeof location !== 'string') throw new TypeError('Location must be a string');
    this._size = size;
    this._location = location;
  }

  // returns the size
  valueOf() {
    return this._size;
  }

  // returns the location
  toString() {
    return this._location;
  }
}
