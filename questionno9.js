// Question 9: Age Calculator (10 Marks)
// Ask the user for their birth year.
// Calculate their approximate age using the current year.
// Sample Input:
// Birth Year: 2005
// Expected Output (using 2026):
// Your approximate age is 21 years.

var dateOfBirth = +prompt("Enter you birth year", "2001");

var currentYear = 2026;

var approxAge = currentYear - dateOfBirth;

console.log("Your approximate age is "+ approxAge + " year");