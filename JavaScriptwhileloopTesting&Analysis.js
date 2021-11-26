/*                                        While-Loop-Testing-&-Analysis 

The following code is part of an ongoing project building an alogorithim ! 
The below code has proved an important piece in working with loops & while loops primarily building a program
that enables the while loop to work with TWO targets as the array is updated on each iteration. This is an 
important component of this alogorithim!

The below code provides an insight into the project & MOST importantly how in Java-Script how we build programs
using for & while loops with if, else if & else statements to generate desired sequential output in the 
developers console. 

NOTE
Results from TEST-TWO & TEST-THREE were not succesful HOWEVER the provide the foundations & good building blocks
to proceed with PROJECT !

For-Loop-Recap | For Loop in Java-Script has three parts:
1 - Initiate value of a counter
2 - Logical Condition - evaluated before each iteration of the loop
3 - Update counter after each iteration

WHILE-LOOP-MECHANICS
- If condition is true EXECUTE expression (code block)

BREAK-STATEMENT
- Completely terminates the LOOP
CONTINUE-STATEMENT
- Exits the current iteration of the loop and continues to next iteration
*/

//                                            Testing-Data-A
console.log("TEST-ONE");
let array1 = [2, 5, 10, 12, 15, 20, 25, 30, 34, 35, 38, 39, 40]; //initiate array
const target1 = 25; //initiate target
const target2 = 30; //inititate target
console.log(target1, target2);
//confirm type of both variables are NUMBERS as we want to compare both
console.log(`Type-of-Target-1 : ${typeof target1}`);
console.log(`Type-of-Target-1 : ${typeof target2}`);

//                                          WHILE-LOOP-TESTING-ONE
while (array1.length > 0) {
  // initiate while loop condition followed by expression
  for (let i = 0; i < array1.length; i++) {
    //initite for loop
    //testing purposes
    array1.length = 0; // WHILE LOOP TERMINATED ....array1 lenght no longer > 1
    console.log("While-Lopp-Terminated");
  }
}

//                                            Testing-Data-B
console.log("TEST-TWO");
let array1A = [2, 5, 10, 12, 15, 20, 25, 30, 34, 35, 38, 39, 40, 41]; //initiate array
const target1A = 25; //initiate target
const target2A = 20; //inititate target
console.log(target1A, target2A);
//confirm type of both variables are NUMBERS as we want to compare both
console.log(`Type-of-Target-1 : ${typeof target1A}`);
console.log(`Type-of-Target-1 : ${typeof target2A}`);
//                                            WHILE-LOOP-TESTING-TWO
while (array1A.length > 1) {
  for (let i = 0; i < array1A.length; i++) {
    if (target2A === target1A) {
      console.log("STOP");
      console.log(`Target-Element-Found : ${target2A}`); //Target Element Idnetified
      console.log(`Iteration : ${i}`); // Displays Iteration Number
      array1A.length = 0; // Terminites while loop condition NOT true
      break; // break completely terminates LOOP
    } else if (target2A < target1A) {
      array1A.shift(array1A[i] > target2A); //shift removes first element from array
      //console.log(array1A);
      console.log("target2 < target");
      break;
    } else target2A > target1A;
    array1A.pop(array1A[i] < target1A); //pop removes last element from array
    //console.log(array1A);
    console.log("target2 > target");
    break;
  }
}
console.log(array1A);

//                                            Testing-Data-C
//                            AIM - Simplify CODE for easier INTERPRETATION
console.log("TEST-THREE");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const T = 4;
while (array2.length > 1) {
  for (let i = 0; i < array2.length; i++) {
    let mP = array2[(array2.length - 1) / 2]; //first iteration = 9
    if (mP === T) {
      console.log("FINISHED");
      array2.length = 0;
    } else if (mP < T) {
      array2.shift(array2[i] >= mP);
    } else mP > T;
    array2.pop(array2[i] <= mP);
  }
}
console.log(array2);
