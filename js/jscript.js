//Including all the pieces of code in a single class. The constructor of this Class also includes a purchaseID, that will allow us in the further design to keep a record of the transactions.
class PaymentCalculator {
  static purchaseCounter = 1;
  
  constructor() {
    this.totalPrice = 0;
    this.selectedBoardGames = [];
    this.purchaseID = PaymentCalculator.purchaseCounter++;
  }

  calculateTotalPrice() {
    this.selectedBoardGames = [];
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
          this.selectedBoardGames.push(price);
          this.totalPrice += price;
        }
      }
    }
  }

  // Add a payment object to the collection
  addPayment() {
    const paymentObject = {
      purchaseID: this.purchaseID,
      totalPrice: this.totalPrice,
      paymentMethod: '',
    };

    this.selectedBoardGames = []; // Reset selected board games
    function selectPaymentMethod(){
      let paymentMethod = prompt('Select a payment method: Credit or Debit');
      if (paymentMethod === 'Debit') {
        alert('You will pay a total of $' + paymentObject.totalPrice);
        return paymentMethod = 'Debit';
      } else if (paymentMethod === 'Credit') {
        let paymentTimes = prompt('Select the number of payments you would like to make: 1, 3, or 6');
  
        switch (paymentTimes) {
          case '1':
            alert('You will pay a total of $' + paymentObject.totalPrice);
            return paymentMethod = 'Credit (1 payments)';
          case '3':
            alert('You will pay $' + paymentObject.totalPrice / 3 + ' each time');
            return paymentMethod = 'Credit (3 payments)';
          case '6':
            alert('You will pay $' + paymentObject.totalPrice / 6 + ' each time');
            return paymentMethod = 'Credit (6 payments)';
          default:
            alert('We are sorry, that is not a valid option');
            return paymentObject.paymentMethod = selectPaymentMethod();
        }
      } else {
        alert('Select a valid payment method');
        return paymentObject.paymentMethod = selectPaymentMethod(); // Don't add the payment if the input is invalid
      }
    }
    // Call the previous function to add the selected payment method
    paymentObject.paymentMethod = selectPaymentMethod();
    // Add the payment object to the collection
    payments.push(paymentObject);
  }

  searchByTransactionID() {
    // Search for a payment with the provided transaction ID in the payments collection
    const transactionID = parseInt(prompt('Enter a Transaction ID to search for:'));
    const payment = payments.find(payment => payment.purchaseID === transactionID);

    if (payment) {
      alert(`Transaction ID: ${payment.purchaseID}\nTotal Price: $${payment.totalPrice}\nPayment Method: ${payment.paymentMethod}`);
    } else {
      let tryAgain = prompt('Transaction ID not found. Do you want to try again? "Yes" or "No"');
      if (tryAgain === 'Yes'){
        this.searchByTransactionID();
      }
      else if (tryAgain === 'No'){
        alert('Understood, have a nice day!')
      }
      else{
        alert('Sorry, not a valid response. Log in again to try again')
      }
    }
  }
}

// Collection to store payment objects
const payments = [];

// Example of usage:
const calculator1 = new PaymentCalculator();
calculator1.calculateTotalPrice();
calculator1.addPayment();

const calculator2 = new PaymentCalculator();
calculator2.calculateTotalPrice();
//calculator2.selectPaymentMethod();
calculator2.addPayment();

// Search for a transaction by ID
calculator1.searchByTransactionID();
console.log(payments)
