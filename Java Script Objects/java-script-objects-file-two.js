/*
Goals
- Object Interaction (User Interface)
- Focusing on ADDING properties to an object

NOTE
- Any function that is attached to an object is called a METHOD
*/

//Define an object to work with
const Business_One = {
  daily_expenditure: 100, //total allocated spend per day
  reach: 1500, //number of unique users ad exposed too
  impressions: 12470, //number of times ad is loaded on web platform
  //amount_spent: [],
  //result: [],
  //NOTE An object that contains a function is called a METHOD . Example below
  cost_per_results: function (spend, result) {
    // cost per result = total amount spent divided by results
    return spend / result;
  },
};

//                                 User-Interface-Interaction
const userInterfaceTesting1 = prompt(
  `Would you like to add amount spent to object please type amount_spent into the prompt`
);
if ((promt = `amount_spent`)) {
  Business_One.amount_spent = 14000; //adding properties to an object using dot notation
  console.log(Business_One);
}

const userInterfaceTesting2 = prompt(
  `Would you like to add amount spent to object please type results into the prompt`
);
if ((promt = `results`)) {
  Business_One["results"] = 145; //adding properties to an object using bracket notation
  console.log(Business_One);
} else {
  console.log("INVALID");
}
