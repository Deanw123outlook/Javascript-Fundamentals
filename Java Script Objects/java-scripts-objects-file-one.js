/*                                   Project Online Marketing Platform | Java Script Objects
Unlike arrays we can name elements when using java script objects, making these data structures easily referenced 
by name throughout our program ! 
Another key difference between arrays & objects, the order of values does not matter at all for objects when we 
want to retrive them !
In objects we define key : value pairs. Objects contain properties(keys) which holds property/properties values!
There are many ways for writing object in Java Script but we will be using - Object Literal Syntax!

Goals
- Object Understanding & Manipulation
- Focusing on Data Retrieval from objects

NOTE
- Any function that is attached to an object is called a METHOD
*/

//Object Data
const Business_One = {
  daily_expenditure: 100, //total allocated spend per day
  reach: 1500, //number of unique users ad exposed too
  impressions: 12470, //number of times ad is loaded on web platform
  amount_spent: 500, //total amount spent
  results: 65, //results achieved
  //NOTE An object that contains a function is called a METHOD . Example below
  cost_per_results: function (spend, result) {
    // cost per result = total amount spent divided by results
    return spend / result;
  },
};
console.log(Business_One);

//                                         Object-Data-Retrieval
//Property retrieval (bracket & dot notation)
console.log(`Braket-Notation-${Business_One["impressions"]}`); // Bracket-Notation property retrieval
console.log(`DOT-Notation-${Business_One.impressions}`); // Dot-Notation property retrieval
//Cost_per_RESULT - Business_One
console.log(
  Business_One.cost_per_results(Business_One.amount_spent, Business_One.results)
);

//                                                 PROMPT
const objectPropertyCheck = prompt(
  "Please choose from the following options - 1. daily_expenditure | - 2. reach | - 3. impressions | - 4. amount_spent | - 5. cost_per_result "
);
console.log(objectPropertyCheck);
//                                            LOGICAL-CONDITION
console.log(`Logical-Condition`);
if (Business_One[objectPropertyCheck]) {
  console.log(Business_One[objectPropertyCheck]);
} else {
  console.log(`Property-Name-Invalid`);
}
