// Question 6: Shopping Bill (10 Marks)
// A customer purchases three products.
// Ask the user to enter the price of each product and calculate:
// 1. Total bill
// 2. Discount amount (10%)
// 3. Final bill after discount
// Sample Input:
// Product 1: 1200
// Product 2: 800
// Product 3: 500

var product1 = +prompt("Enter the first product price");
var product2 = +prompt("Enter the Second product price");
var product3 = +prompt("Enter the Third product price");

//----------------- 1. Total bill
var totalBill = product1 + product2 + product3;

//------------ 2. Discount amount (10%)
var discountAmount = totalBill * 0.10;

//----------------- 3. Final bill after discount
var finalBillAfterDiscount = discountAmount;



console.log("Total bill " + totalBill);
console.log("Discount amount (10%) " + discountAmount);
console.log("Final bill after discount " + finalBillAfterDiscount);

