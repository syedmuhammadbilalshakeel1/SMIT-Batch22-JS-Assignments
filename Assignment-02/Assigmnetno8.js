// Question 8: Leap Year Checker (5 Marks)
// Ask the user to enter a year.
// Determine whether it is a leap year.
// Rules:
// • A year divisible by 400 is a leap year.
// • A year divisible by 100 but not 400 is not a leap year.
// • Otherwise, a year divisible by 4 is a leap year.
// Example Input:
// Enter Year: 2024
// Expected Output:
// 2024 is a Leap Year.

var userEnterYear = +prompt("Enter a yaer");

if (userEnterYear % 400===0) {
  console.log(userEnterYear + " is a leap year");
} else if (userEnterYear % 100===0) {
  console.log(userEnterYear + " is not a leap year");
} else if (userEnterYear % 4===0){
  console.log(userEnterYear + " is a leap year");
} else {
      console.log(userEnterYear + " is not a leap year");
}
