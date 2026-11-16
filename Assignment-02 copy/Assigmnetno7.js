// Question 7: Discount Eligibility (5 Marks)
// A shopping store offers discounts based on the total purchase amount.
// Purchase Amount Discount
// Rs. 10,000 or above 20%
// Rs. 5,000–9,999.99 10%
// Rs. 2,000–4,999.99 5%
// Below Rs. 2,000 No discount
// Ask the user to enter their total purchase amount.
// Calculate and display:
// • Original amount
// • Discount percentage
// • Discount amount
// • Final payable amount
// Example Input:
// Purchase Amount: 6000

var userPurchaseAmmount = +prompt("Enter your total purchase amount", "6000"); 
var discountOnPurchage = 0;

if (userPurchaseAmmount < 0) {
  console.log("invalide purchage ammount");
} else if (userPurchaseAmmount >= 10000) {
    discountOnPurchage = 20;
    // console.log(userPurchaseAmmount + "20% disconu tammounyt")
} else if (userPurchaseAmmount >= 5000 && userPurchaseAmmount < 10000) {
  discountOnPurchage = 10;
  // console.log(userPurchaseAmmount + "100% disconu tammounyt")
} else if (userPurchaseAmmount >= 2000 && userPurchaseAmmount < 5000) {
  discountOnPurchage = 5;
  // console.log(userPurchaseAmmount + "5% disconu tammounyt")
}

var discountAmmount = (userPurchaseAmmount * discountOnPurchage) / 100;
var finalAmountAfterPursahacge = userPurchaseAmmount - discountAmmount;

console.log("Original Amount: Rs. " + userPurchaseAmmount);
console.log("Discount: " + discountAmmount + "%");
console.log("Discount Amount: Rs. " + discountAmmount);
console.log("Final Amount: Rs. " + finalAmountAfterPursahacge);
