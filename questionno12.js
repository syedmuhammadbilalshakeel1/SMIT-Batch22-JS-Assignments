// Question 12: Salary Calculator (10 Marks)
// A company calculates employee salaries using the following structure:
// • Basic Salary: Entered by the user
// • House Allowance: 20% of basic salary
// • Medical Allowance: 10% of basic salary
// • Tax Deduction: 5% of basic salary
// Calculate:
// 1. House allowance
// 2. Medical allowance
// 3. Tax deduction
// 4. Gross salary
// 5. Net salary after tax
// Sample Input:
// Basic Salary: 50000

var userBaseSalary = +prompt("Enter Your Base Salary");

// ----------------House Allowance: 20% of basic salary
var houseAllowance = userBaseSalary *0.20;


//---------------- Medical Allowance: 10% of basic salary
var medicalAllowance = userBaseSalary *0.10;

//----------------Tax Deduction: 5% of basic salary
var taxDeduction = userBaseSalary * 0.05;

var grossSalary = userBaseSalary + houseAllowance + medicalAllowance;

var netSalaryAftertax = grossSalary - taxDeduction;

console.log("Base salary " + userBaseSalary);
console.log("House Allowance: " + houseAllowance );
console.log("Medical Allowance: " + medicalAllowance);
console.log("Gross Salary: " + grossSalary);
console.log("Tax Deduction: " + taxDeduction);
console.log("Net Salary: " + netSalaryAftertax);



