// Section A — Basic Conditions (20 Marks)
// Question 1: Positive, Negative or Zero (5 Marks)
// Write a JavaScript program that takes a number from the user and determines whether it is:
// • Positive
// • Negative
// • Zero
// Example Input:
// Enter a number: -8

var userNumber = +prompt("Enter any number you like", "12");

if (userNumber > 0) {
  console.log(userNumber + " is a positive number");
} else if (userNumber < 0) {
  console.log(userNumber + " is a Negative number");
} else {
    console.log(userNumber + " number is zero");
}
