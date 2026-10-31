// Question 3: Voting Eligibility (5 Marks)
// Create a program that asks the user for their age.
// Conditions:
// • Age 18 or above: Eligible to vote
// • Below 18: Not eligible to vote
// • Negative age: Invalid age
// Example Input:
// Enter your age: 16
// Expected Output:
// You are not eligible to vote.

var userAge = +prompt("Enter the your age.", "16");

if (userAge >= 18) {
    console.log(userAge + " you are Eligible to vote");
} else if (userAge <= 18) {
    console.log(userAge + " you are Not Eligible to vote");
} else {
    console.log(userAge + "invalide age");
}