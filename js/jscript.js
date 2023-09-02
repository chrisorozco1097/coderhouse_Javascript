let totalPrice = 0;
function calculateTotalPrice() {
    let numItems = prompt('Please insert the number of items you want to purchase');

    if (isNaN(numItems) || numItems % 1 !== 0 || numItems == '') {
      alert('Please enter integer numbers only');
      calculateTotalPrice();
    } else {
      for (let i = 1; i <= numItems; i++) {
        let price = prompt('Please insert the price of item No.' + i);

        if (isNaN(price) || price == '') {
          alert('Please enter numbers only');
          i--;
        } else {
          price = parseFloat(price);
          totalPrice += price;
        }
      }
    }
}
// Select the payment method
function paymentMethod() {
    let payment = prompt('Select a payment method: Credit or Debit')
    if (payment == 'Debit') {
        alert("You will pay a total of $" + totalPrice)
    }
    else if (payment == 'Credit') {
        let paymentTimes = prompt('Select the amount of payments that you would like to make: 1, 3 or 6')
        switch (paymentTimes) {
            case '1':
                alert("You will pay a total of $" + totalPrice);   
                break;
            case '3':
                alert("You will pay a total of $" + totalPrice/3 + ' each time');
                break;
            case '6':
                alert("You will pay a total of $" + totalPrice/6 + ' each time');
                break;
            default:
                alert("We are sorry, that is not a valid option")
                paymentMethod();
                break;
        }
    }
    else {
        alert('Select a valid payment method');
        paymentMethod();
    }
}

// Piece of code to simulate the calculation of total price and paymenth methods
calculateTotalPrice();
paymentMethod();