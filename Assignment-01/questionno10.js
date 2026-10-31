// Question 10: Marks Percentage Calculator (10 Marks)
// Ask the user to enter marks for five subjects.
// Each subject has a maximum of 100 marks.
// Calculate:
// 1. Total obtained marks
// 2. Total maximum marks
// 3. Percentage
// Sample Input:
// English: 80
// Math: 90
// Science: 75
// Computer: 95
// Urdu: 85

var courseEnglish = +prompt("Enter the subject marks you obtain in English  tha maximum marks is 100");
var courseMath = +prompt("Enter the subject marks you obtain in  Math tha maximum marks is 100");
var courseScience = +prompt("Enter the subject marks you obtain in Science  tha maximum marks is 100");
var courseComputer = +prompt("Enter the subject marks you obtain in Computer  tha maximum marks is 100");
var courseUrdu = +prompt("Enter the subject marks you obtain in  Urdu tha maximum marks is 100");


var totalObtainedMarks = courseEnglish + courseMath + courseScience + courseComputer + courseUrdu;
var totalMaximumMarks = 500;
var Percentage = (totalObtainedMarks / totalMaximumMarks) * 100;


console.log("Total obtained marks " + totalObtainedMarks );
console.log("Total maximum marks " + totalMaximumMarks);
console.log("Percentage " + Percentage);