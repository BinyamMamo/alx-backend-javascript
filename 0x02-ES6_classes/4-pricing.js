import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // store the attributes with a setter
    this.amount = amount;
    this.currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for amount
  set amount(a) {
    if (typeof a !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = a;
  }

  // Setter for currency
  set currency(c) {
    if (!(c instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = c;
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
