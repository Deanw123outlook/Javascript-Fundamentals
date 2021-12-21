//------------------------------------------JavaScript-Date-Object---------------------------------------------

/*                                          Creating Date Objects

- JavaScript Stores Dates as Milliseconds
- JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time 
Coordinated).

NOTE
Zero time is January 01, 1970 00:00:00 UTC.

Date objects are created with the new Date() constructor.
There are 4 ways to create a new date object:
- new Date()
- new Date(year, month, day, hours, minutes, seconds, milliseconds)
- new Date(milliseconds)
- new Date(date string)

*/

//                                              - new Date() -
//Using new Date(), creates a new date object with the current date and time

// new Date()
const now = new Date(); //Date object represents a single moment in time. It contains a number that represents
//the milliseconds since January 1, 1970 UTC

// getTime()
const time = now.getTime(); //getTime() method of the Date object to get the number of milliseconds since
//January 1, 1970 00:00:00 UTC
console.log(time);

//Milliseconds to seconds
const conversionA = time / 1000; //to convert milliseconds to seconds divide ms / 1000
console.log(`January 1, 1970 00:00:00 UTC until NOW in seconds ${time}`);

//To create a new Date object with a SPECIFIED date and time, you can pass a date string into the Date() constructor like this:
const d = new Date("February 02, 2020 01:02:03");
console.log(d.getTime()); // 1580580123000

//-----------------------------------------EXPERIMENTAL-SPEED-TESTING---------------------------------------------------
//             AIM & ANALYSIS - Calculate how many millseconds it takes to compute this simple block of code
//Initiate start time
const initiateStartTime = new Date();
const startTime = initiateStartTime.getTime();
console.log(`Start-Time-${startTime}`);
//CODE BLOCK - check computation time
const delay1 = 20 + 25;
const delay2 = 40 + 45;
const delayed = delay1 + delay2;
console.log(`Code-Output-${delayed}-HOURS`);
//Initiate end time
const initiateEndTime = new Date();
const endTime = initiateEndTime.getTime();
console.log(`End-Time-${endTime}`);
//Convert milliseconds
const conversionStartTime = startTime / 1000;
const conversionEndTime = endTime / 1000;
const executionTime = conversionEndTime - conversionStartTime; //milliseconds
console.log(`Execution-Timing-${executionTime}`);
