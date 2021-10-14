//Function Variation Syntax Analysis

//                                          FUNCTION VARIATION 1
//                                        1. FUNCTION DECLARATION

//Function 1a
function enterFullName(first, middle, second) {
  console.log(`Full Name : ${second} , ${middle} , ${first} `);
}
//Function 2a
function enterYourAddress(line1, line2, line3) {
  console.log(
    `Address Line 1 : ${line1}` +
      `Address Line 2 : ${line2}` +
      `Address Line 3 ${line3}`
  );
}
//Function 3b
function enterYourBirhtDate(date) {
  console.log(`Date Format Required 00/00/0000`);
  console.log(date);
}

//                                         FUNCTION VARIATION 2
//                                        2. FUNCTION EXPRESSION

//Function 1b
const enterfullName = function (firstName, middleName, lastName) {
  return `Full Name : ${lastName}, ${middleName}, ${firstName}`;
};
//Function 2b
const enterYourAddress = function (line1, line2, line3) {
  return (
    `Address Line 1: ${line1}` +
    `Address Line 2: ${line2}` +
    `Address Line 3: ${line3}`
  );
};
//Function 3b
const enterYourBirthDate = function (date) {
  console.log(`Date Format Required 00/00/0000`);
  return `Date Entered : ${date}`;
};

//                                         FUNCTION VARIATION 3
//                                          3. ArrowFunction

//Function 1c
const enterfullName = (firstName, middleName, lastName) => {
  return `Full Name : ${lastName}, ${middleName}, ${firstName}`;
};
//Function 2c
const enterYourAddress = (line1, line2, line3) => {
  return (
    `Address Line 1: ${line1} ` +
    `Address Line 2: ${line2} ` +
    `Address Line 3: ${line3}`
  );
};
//Function 3c
const enterYourBirthDate = date => {
  console.log(`Date Format Required 00/00/0000`);
  return `Date Entered : ${date}`;
};
