/*
============================================
; Title:  Assignment 3.4.js
; Author: Professor Krasso
; Date:   04 Mar 2020
; Modified by: Jason Cords
; Description: Assignment in looping statements
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 3.4"),"\n"); //header

var value = 7;

function match(a, b){ //function to match variables
  if(a === b){ // if statement to compare passed values
    return true; //if variables are the same, return true
  }
  else{ //if variables are not the same, return false
    return false;
  }
}

function logMismatch(a, b){ //function to log if match function returns false
  console.log(a + " does not match " + b + "!");
}

function logMatch(a, b){ //function to log if match function returns true
  console.log(a + " does match " + b + "!");
}

for (var x = 0; x < 10; x++) { //for loop with 10 iterations
  var rand = randomNumber(); //var that gets a random number from randomNumber function

  function randomNumber() { //function to return a random number
    return Math.floor((Math.random() * 10) + 1) //returns random number through math function
  }
  if (match(value, rand)){ //if statement that calls match function
    logMatch(value, rand); //calls logMatch function if match function returns true
  }
  else{
    logMismatch(value, rand); //calls logMismatch function if match function returns false
  }
}
