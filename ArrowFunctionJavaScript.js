/*                               Project TITLE : FUNCTION VARIATIONS IN JAVA-SCRIPT
                                            Part 3/3
          Project OBJECTIVE : Build a simple self-fill-in-FORM that can be viewed in the accompanying index html 
          files developers console to fill details into and use three different variations of functions
          Project GOAL: Writing & understand the variations in the three chosen functions

                                        What is a FUNCTION ?
In its simplest terminology a Function is piece of CODE that we can re-use !
An important note that programmers universally emphasize is the DRY rule... DONT REPEAT YOURSELF
This rule becomes clearer as you start your journey writing programs !

There are many variaitons in function calls in Java - Script. The three chosen are for developing
the fundamentals an absics in Java-Script ! These include:
1.Function Declarations
2.Function Expressions
3.Arrow Functions*/

//                                            FUNCTION 3
//                                        3. ArrowFunction

//Function 1
const enterfullName = (firstName, middleName, lastName) => {
  return `Full Name : ${lastName}, ${middleName}, ${firstName}`;
};
//Function 2
const enterYourAddress = (line1, line2, line3) => {
  return (
    `Address Line 1: ${line1} ` +
    `Address Line 2: ${line2} ` +
    `Address Line 3: ${line3}`
  );
};
//Function 3
const enterYourBirthDate = date => {
  console.log(`Date Format Required 00/00/0000`);
  return `Date Entered : ${date}`;
};

//                                      ARROW FUNCTION TESTING

//Test Name Function
const trial1 = enterfullName('James', 'Patrick', 'Heusten');
console.log(trial1);
//Test Address Function
const trial2 = enterYourAddress(
  '13th Street. 47 W 13th St',
  'New York, NY 1001',
  'USA'
);
console.log(trial2);
//Test Birth Date Function
const trial3 = enterYourBirthDate(`24/07/1981`);
console.log(trial3);
