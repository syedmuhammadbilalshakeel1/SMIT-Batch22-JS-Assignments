// Question 5: Basic Calculator (10 Marks)
// Take two numbers from the user using prompt().
// Perform the following operations:
// • Addition
// • Subtraction
// • Multiplication
// • Division
// • Modulus
// Display the results.

// Sample Input:
// First Number: 20
// Second Number: 6



var firstNum = +prompt("Enter first Number");
var secondNum = +prompt("Enter Second Number");


var addtion = firstNum + secondNum;
var subtraction = firstNum - secondNum;
var multiplication = firstNum * secondNum;
var division = firstNum / secondNum;
var modulous = firstNum % secondNum;


console.log("Addition: " + addtion);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulous);
