/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // clones the car
  cloneCar() {
    const symbol = Symbol('Car');
    const clonedCar = Object.create(this);
    clonedCar[symbol] = true;
    return clonedCar;
  }
}
