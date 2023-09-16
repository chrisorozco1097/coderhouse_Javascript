//Including all the pieces of code in a single class. The constructor of this Class also includes a purchaseID, that will allow us in the further design to keep a record of the transactions.
class PaymentCalculator {
  static purchaseCounter = 1;
  constructor() {
    this.totalPrice = 0;
    this.selectedBoardGaymes = [];
    this.purchaseID = PaymentCalculator.purchaseCounter++;
  }

  calculateTotalPrice() {
    this.selectedBoardGaymes = [];
    let numItems = prompt('Please insert the number of items you want to purchase');

    if (isNaN(numItems) || numItems % 1 !== 0 || numItems == '') {
      alert('Please enter integer numbers only');
      this.calculateTotalPrice();
    } else {
      for (let i = 1; i <= numItems; i++) {
        let price = prompt('Please insert the price of item No.' + i);

        if (isNaN(price) || price == '') {
          alert('Please enter numbers only');
          i--;
        } else {
          price = parseFloat(price);
          this.selectedBoardGaymes.push(price);
          this.totalPrice += price;
        }
      }
    }
  }

  selectPaymentMethod() {
    let payment = prompt('Select a payment method: Credit or Debit');

    if (payment === 'Debit') {
      alert('You will pay a total of $' + this.totalPrice);
    } else if (payment === 'Credit') {
      let paymentTimes = prompt('Select the number of payments you would like to make: 1, 3, or 6');

      switch (paymentTimes) {
        case '1':
          alert('You will pay a total of $' + this.totalPrice);
          break;
        case '3':
          alert('You will pay $' + this.totalPrice / 3 + ' each time');
          break;
        case '6':
          alert('You will pay $' + this.totalPrice / 6 + ' each time');
          break;
        default:
          alert('We are sorry, that is not a valid option');
          this.selectPaymentMethod();
          break;
      }
    } else {
      alert('Select a valid payment method');
      this.selectPaymentMethod();
    }
  }
}

//Example of use, I'm adding two examples so it can be checked the functionality of the ID.
const calculator1 = new PaymentCalculator();
calculator1.calculateTotalPrice();
calculator1.selectPaymentMethod();
console.log("Transaction ID: ", calculator1.purchaseID);
const calculator2 = new PaymentCalculator();
calculator2.calculateTotalPrice();
calculator2.selectPaymentMethod();
console.log("Transaction ID: ", calculator2.purchaseID);