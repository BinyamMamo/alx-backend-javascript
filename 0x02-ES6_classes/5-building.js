export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter for sqft
  get sqft() { return this._sqft; }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
