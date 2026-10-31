// Section D — Logic Challenge(20 Marks)
// Question 11: Currency Converter (10 Marks)
// Create a currency converter that converts Pakistani Rupees (PKR) into US Dollars (USD).
// Use a fixed exchange rate:
// 1 USD = 280 PKR
// Ask the user to enter an amount in PKR and display the equivalent amount in USD.
// Sample Input:
// Enter PKR: 5600

var exchnagerateOfUsa$ = 280;

var pkrAmount = +prompt("Enter the ammount you want to exchange it", "5600");

var userAmountPkr = pkrAmount / exchnagerateOfUsa$;

console.log(
  pkrAmount + " PKR is equivalent to " + userAmountPkr.toFixed(2) + "USD"
);

document.write(
  pkrAmount + " PKR is equivalent to " + userAmountPkr.toFixed(2) + "USD"
);
