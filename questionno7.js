// Question 7: Mathematical Expression (10 Marks)
// Write JavaScript expressions to solve the following problems using the correct order of operations.
// A = 10 + 5 * 2
// B = (10 + 5) * 2
// C = 20 / 2 + 3 * 4 - 5
// D = 5 + 2 * (8 - 3) / 5
// E = 30 % 4 + 6 * 2
// Display each result and explain the calculation order using comments.


// we solve that thing we use "BDMAS" "() / * + -" rule 

// expration A
var firstExpresion = 10 + 5 * 2;
// ---------------- 10 + 5 * 2  //  * two number
// ---------------- 10 + 10     // then we + two number
// ----------------  20          // final result
console.log("first Exprsion A " +  firstExpresion)


// expration B
var SecondExpresion = (10 + 5) * 2;
// ---------------- (10 + 5) * 2;  // fist we bracket  (10+ 5)
// ---------------- 15 * 2;    // then we * two number
// ----------------  30;       // final result
console.log("first Exprsion B " + SecondExpresion);




// expration C
var ThirdExpresion = 20 / 2 + 3 * 4 - 5;
// ---------------- 20 / 2 + 3 * 4 - 5;  //  fistst we do dividsion
// ---------------- 10 + 3 * 4 - 5;      // second we do multliplication
// ---------------- 10 + 12 - 5;      //  third we do addition
// ---------------- 22 - 5;      //  fourth we do substraction
// ---------------- 17;      //  that is the final answer
console.log("first Exprsion C " + ThirdExpresion);


// expration D
var fourthExpresion = 5 + (2 * (8 - 3)) / 5;
// ---------------- 5 + (2 * (8 - 3)) / 5; //  first solve inner bracket (8-3)
// ---------------- 5 + (2 * 5) / 5;    //  then solve outerbraket (2* 5)
// ---------------- 5 + 10 / 5;      //  then do dividision
// ---------------- 5 + 2;    //  then we do addition
// ----------------  7;     //  that is the final answer
console.log("first Exprsion D " + fourthExpresion);


// expration D
var fifthExpresion = (30 % 4) + 6 * 2;
// ---------------- (30 % 4) + 6 * 2; //  first solve inner bracket (30 % 4)
// ---------------- 2 + 6 * 2;    //  then we do multiplication
// ---------------- 2 + 12;      //  then do addition
// ---------------- 14;   // that is the final answer
console.log("first Exprsion E " + fifthExpresion);