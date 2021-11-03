//                            BINARY SEARCH ALGORITHIM DEVELOPMENT
//                                      For-Loop-Array-Testing
//This will be an important component of the iteration process in the Binary Search Algorithim Mechanics

//                                            TEST DATA
const arrayElements1 = [2, 5, 7, 9, 11, 12, 14]; //Sorted Array
const targetElement1 = 10; //Target Element
//                                       Loop-Array-Testing-1
for (let i = 0; i < arrayElements1.length; i++) {
  //if statement that logs elements from array to developers console if element greater|equal to target(10)
  if (arrayElements1[i] >= targetElement1) {
    console.log(`Loop-Array-Testing-One ${arrayElements1[i]}`);
  }
} // 11, 12, 14
//                                        Loop-Array-Testing-2
for (let i = 0; i < arrayElements1.length; i++) {
  //if statement that logs elements from array to developers console if element less|equal to target(10)
  if (arrayElements1[i] <= targetElement1) {
    console.log(`Loop-Array-Testing-Two ${arrayElements1[i]}`);
  }
} // 2, 5, 7, 9

//                                        Loop-Array-Testing-3
//Objective : Add elements to empty Array based on a condition of choice !

const emptyArray1 = []; // initiate empty Array
for (let i = 0; i < arrayElements1.length; i++) {
  if (arrayElements1[i] <= targetElement1) {
    //condition element <= target
    emptyArray1.push(arrayElements1[i]); //push keyword (add elements to end of array)
  }
}
console.log("PUSH-KEYWORD");
console.log(`LOOP-ARRAY-TEST-3`);
console.log(emptyArray1); // 2, 5, 7, 9

//                                        Loop-Array-Testing-4
//Objective : Use the continue statement to only select elements that meet the expression .ie not equal to specifized target element
const arrayElementsx = [2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15, 17];
const targetElementx = 8;
const emptyArrayx = [];
console.log("--Continue-Statement--");
for (let i = 0; i < arrayElementsx.length; i++) {
  if (arrayElementsx[i] <= targetElementx) continue; // continue will exit the current iteration and move to the next iteration
  emptyArrayx.push(arrayElementsx[i]); //push keyword (add elements to end of array)
}
console.log(`LOOP-ARRAY-TEST-4`);
console.log(emptyArrayx); //9, 10, 12, 13, 14, 15, 17
