// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "Salah"
function upperCaseCustomerName() {

    if (customerName) {
      customerName = customerName.toUpperCase();
    }
  }

function setBestCustomer(){
     bestCustomer = "not bob"
}
function overwriteBestCustomer() {
   
    if (bestCustomer) {
      bestCustomer = 'maybe bob';
    }
  }

function changeLeastFavoriteCustomer(){
    if (leastFavoriteCustomer){
        leastFavoriteCustomer = "Azplicueta"
    }
}
   