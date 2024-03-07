/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);

    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }

    this._range = range;
  }
}
