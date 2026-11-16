// Question 6: Student Grade Calculator (5 Marks)
// Ask the user to enter their percentage.
// Determine the grade using the following criteria:
// Percentage Grade
// 90–100 A+
// 80–89 A
// 70–79 B
// 60–69 C
// 50–59 D
// Below 50 Fail
// Conditions:
// • Percentage must be between 0 and 100.
// • Display an error message for invalid percentages.
// Example Input:
// Enter percentage: 85

var userPercentage = +prompt(
  "eneter your percentge to tell the grade account to the records",
);
if (userPercentage < 0 || userPercentage > 100) {
     console.log(
       "Error: Invalid percentage. Please enter a number between 0 and 100.",
     );
}else if  (userPercentage >= 90 && userPercentage <= 100) {
  console.log(userPercentage + " is A+ grade");
} else if (userPercentage >= 80 && userPercentage <= 89) {
  console.log(userPercentage + " is A grade");
} else if (userPercentage >= 70 && userPercentage <= 79) {
  console.log(userPercentage + " is B grade");
} else if (userPercentage >= 60 && userPercentage <= 69) {
  console.log(userPercentage + " is C grade");
} else if (userPercentage >= 50 && userPercentage <= 59) {
  console.log(userPercentage + " is D grade");
} else {
  console.log(userPercentage + " fail");
}
