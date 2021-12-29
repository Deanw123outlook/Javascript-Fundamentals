/*
Goals
- Method testing and analysis
- this keyword testing and analysis
- Create a new property using the this keyword

NOTE
- Any function that is attached to an object is called a METHOD
- For every method Javascript gives us access to a special keyword/variable called - this - ! The - this - keyword
/variable is basically equal to the object on which the method is called
*/

//                                           Object-Data-1
console.log("Object-Data-1");
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

//                                          Method Testing
console.log(`Method-Testing`);
console.log(Business_One.cost_per_results(60, 10)); // Dot Notation - predicted answer 6
console.log(Business_One["cost_per_results"](60, 10)); // Bracket Notation - predicted answer 6

//                                           Object-Data-2
console.log("Object-Data-2");
const Business_Two = {
  daily_expenditure: 200, //total allocated spend per day
  reach: 17500, //number of unique users ad exposed too
  impressions: 20470, //number of times ad is loaded on web platform
  amount_spent: 1200, //total amount spent
  results: 89, //results achieved
  //NOTE An object that contains a function is called a METHOD . Example below
  cost_per_results: function () {
    // cost per result = total amount spent divided by results
    return this.amount_spent / this.results; // this keyword is equal to the object on which the method is called
  },
};
console.log(Business_Two);

//                                   Method & - this - keyword testing
console.log(`Method & - this - keyword testing`);
console.log(Business_Two.cost_per_results()); // remember this keyword is equal to the object on which the method is called
console.log(Business_Two["cost_per_results"]());
