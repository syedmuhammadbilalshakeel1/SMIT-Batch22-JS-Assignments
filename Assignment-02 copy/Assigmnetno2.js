// Question 2: Even or Odd Number (5 Marks)
// Ask the user to enter an integer and determine whether it is even or odd using the modulus operator.
// Example Input:
// Enter a number: 17
// Expected Output:
// 17 is an odd number

var userInputModule = +prompt("enter an integer number", "17");

if (userInputModule % 2 === 0) {
  console.log(userInputModule + " is even number");
} else {
  console.log(userInputModule + " is odd number");
}
