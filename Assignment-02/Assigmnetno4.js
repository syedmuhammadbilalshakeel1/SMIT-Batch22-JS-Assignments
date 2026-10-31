// Question 4: Find the Largest Number (5 Marks)
// Take three numbers from the user and find the largest number using conditional statements.
// Example Input:
// First Number: 25
// Second Number: 80
// Third Number: 45
// Expected Output:
// 80 is the largest number.
// If multiple numbers share the maximum value, display that maximum

var firstNumber = +prompt("Enter your First Number");
var SecondtNumber = +prompt("Enter your Second Number");
var ThirdNumber = +prompt("Enter your Third Number");

if (firstNumber >= SecondtNumber && firstNumber >= ThirdNumber) {
  alert(firstNumber + " Largest number is");
} else if (SecondtNumber >= firstNumber && SecondtNumber >= ThirdNumber) {
  alert(SecondtNumber + " largest number is");
} else {
  alert(ThirdNumber + " largest number is");
}
