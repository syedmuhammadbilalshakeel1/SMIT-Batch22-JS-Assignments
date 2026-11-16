// Question 9: Job Eligibility Checker (5 Marks)
// A company is hiring junior developers.
// Requirements:
// • Age must be between 18 and 30 (inclusive).
// • Minimum experience: 1 year.
// • JavaScript knowledge is required.
// Ask the user for:
// • Age
// • Years of experience
// • JavaScript knowledge (yes or no)
// Expected Output:
// Congratulations! You are eligible to apply.
// Otherwise:
// Sorry! You do not meet the requirements.
// Reject negative ages or experience values


var userAge = +prompt("enetr Your right age according to CNIC");
var yearOfExpernce = +prompt("Enter the year of exprence");
var javascriptFromUser = prompt("Enter you hav a knowledage of JS , Yes or no", "yes");



if (userAge < 0 || yearOfExpernce < 0) {
    console.log("Reject negative ages or experience values");
}
else if ((userAge >= 18 && userAge <= 30) && (yearOfExpernce >= 1) && (javascriptFromUser == "yes")) {
    console.log("Congratulations! You are eligible to apply.");
} else {
    console.log("Sorry! You do not meet the requirements.");
}