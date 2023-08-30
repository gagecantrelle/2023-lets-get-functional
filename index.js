// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underpants-khamal22");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
  //create a variable that holds the return value of _.filter
  var arr = _.filter(array, function (obj) {
    //check if the current object has a gender key that is equal to 'male'
    if (obj.gender === 'male') {
      //if so return that object
      return obj;
    }
  })
  //return the length of arr
  return arr.length;
};

var femaleCount = function (array) {
  //create a variable that holds the return value of _.reduce
  var arr = _.reduce(array, function (seed, obj, index) {
    //check if the current object has a gender key that is equal to 'female'
    if (obj.gender === 'female') {
      //if so return that seed + 1
      return seed + 1;
      //run if false
    } else {
      //return seed
      return seed;
    }

  }, 0)
  //return arr
  return arr;
};

var oldestCustomer = function (array) {
  //create two empty arrays
  var arr = [];
  var customer = [];
  //loop through the given array
  for (let i = 0; i < array.length; i++) {
    //push the name and age key values in the customer array
    customer.push(array[i].name);
    customer.push(array[i].age);
    //push the current customer array in to the arr array
    arr.push(customer);
    //set customer array to be an empty array
    customer = [];
  }
  //sort the arr array by the highest number in the array in side of the array example    [['a', 1],['b', 2]] sort =>  [['b', 2],['a', 1]]               
  arr = arr.sort((a, b) => { return b[1] - a[1] });
  //return the string of the first value in the array in the array
  return arr[0][0];
};

var youngestCustomer = function (array) {
  //create two empty arrays
  var arr = [];
  var customer = [];
  //loop through the given array
  for (let i = 0; i < array.length; i++) {
    //push the name and age key values in the customer array
    customer.push(array[i].name);
    customer.push(array[i].age);
    //push the current customer array in to the arr array
    arr.push(customer);
    //set customer array to be an empty array
    customer = [];
  }
  //sort the arr array by the highest number in the array in side of the array example    [['b', 2],['a', 1]] sort => [['a', 1],['b', 2]]
  arr = arr.sort((a, b) => { return a[1] - b[1] });
  //return the string of the first value in the array in the array
  return arr[0][0];
};

var averageBalance = function (array) {
  //create a empty array and variable that will wold the average or all balance in the array 
  var arr = [];
  var average = 0;
  //loop through the given array
  for (let i = 0; i < array.length; i++) {
    //create a temporary variable that hold the current balance string
    var temp = array[i].balance
    //remove the first character  in the string ($)
    temp = temp.slice(1);
    //replace ',' with a empty string
    temp = temp.replace(',', '');
    //change the string into a number
    temp = parseFloat(temp);
    //push the temp in to the arr array
    arr.push(temp);

  }
  //loop through arr
  for (let i = 0; i < arr.length; i++) {
    //set average to equal the current value + average 
    average += arr[i];
  }

  //return average divide by arr length
  return average / arr.length;
};

var firstLetterCount = function (array, letter) {
  //create a variable that is equal to 0
  let count = 0;
  //loop through the given array
  for (var obj of array) {
    //create a variable that equal to the current obj key.name but lowerCase
    var low = obj.name.toLowerCase();
    //check if the first character  in low is equal to the given letter but lowerCase
    if (low[0] === letter.toLowerCase()) {
      //increase count
      count++;
    }
  }
  //return count
  return count;
};

var friendFirstLetterCount = function (array, customers, letter) {

};

var friendsCount = function (array, name) {

};

var topThreeTags = function (array) {

};

var genderCount = function (array) {

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
