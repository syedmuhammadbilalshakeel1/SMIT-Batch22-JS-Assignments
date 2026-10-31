// Section B — Comparison & Logical Operators (25 Marks)
// Question 5: Login Authentication (5 Marks)
// Create a simple login system using fixed credentials.
// Credentials:
// Username: admin
// Password: admin123
// Ask the user to enter their username and password.
// Conditions:
// • Both correct: Login Successful
// • Username incorrect: Invalid Username
// • Username correct but password incorrect: Invalid Password
// Example Output:
// Login Successful! Welcome Admin

//=---------------------- store in the varible
var userEmailCredential = "admin";
var userPaswordCredential = "admin123";

// -------------------take input from user
var enterUserEmail = prompt("eneter the valid Username");
var enterUserPassword = prompt("eneter the valid email");

if (
  userEmailCredential === enterUserEmail &&
  userPaswordCredential === enterUserPassword
) {
  alert(" Login Successful! Welcome Admin ");
} else if (userEmailCredential !== enterUserEmail) {
  alert("Username incorrect: Invalid Username");
} else {
  alert("username correct but password incorrect: Invalid Password");
}
