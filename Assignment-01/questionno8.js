// Section C — User Input & Strings (30 Marks)
// Question 8: Welcome Message (10 Marks)
// Ask the user for:
// • First Name
// • Last Name
// • City
// Combine the information and display a welcome message using string concatenation.
// Sample Input:
// First Name: Ali
// Last Name: Khan
// City: Karachi



var firstName = prompt("Enter your first Name");
var lastNmae = prompt("Enter your last Nmae");
var cityNmae = prompt("enter you city name");

alert("Welcome " + firstName + lastNmae + " !");
alert("You are from " + cityNmae);

document.write("Welcome " + firstName + lastNmae + " ! <br>");
document.write("You are from " + cityNmae);