/*                               Project TITLE : FUNCTION VARIATIONS IN JAVA-SCRIPT
                                            Part 2/3
          Project OBJECTIVE : Build a simple FORM that can be viewed in the accompanying index html file
          to fill details into and use three different variations of functions
          Project GOAL: Understand the variations in the three chosen functions

                                        What is a FUNCTION ?
In its simplest terminology a Function is piece of CODE that we can re-use !
An important note that programmers universally emphasize is the DRY rule... DONT REPEAT YOURSELF
This rule becomes clearer as you start your journey writing programs !

There are many variaitons in function calls in Java - Script. The three chosen are for developing
the fundamentals an absics in Java-Script ! These include:
1.Function Declarations
2.Function Expressions
3.Arrow Functions
*/

//                                             FUNCTION 2
//                                      2. FUNCTION EXPRESSION

//Function 1
const enterFullName = function (firstName, middleName, lastName) {
  return `Full Name : ${lastName}, ${middleName}, ${firstName}`;
};
//Function 2
const enterYourAddress = function (line1, line2, line3) {
  return (
    `Address Line 1: ${line1}` +
    `Address Line 2: ${line2}` +
    `Address Line 3: ${line3}`
  );
};
//Function 3
const enterYourBirthDate = function (date) {
  console.log(`Date Format Required 00/00/0000`);
  return `Date Entered : ${date}`;
};

//                                      FUNCTION EXPRESSIONS TESTING

//Test Name Function
const trial1 = enterFullName('Roger', 'Albert', 'King');
console.log(trial1);
//Test Address Function
const trial2 = enterYourAddress(
  '13th Street. 47 W 13th St',
  'New York, NY 1001',
  'USA'
);
console.log(trial2);
//Test Birth Date Function
const trial3 = enterYourBirthDate(`00/01/1800`);
console.log(trial3);
