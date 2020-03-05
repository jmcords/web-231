/*
============================================
; Title:  Exercise 3.2.js
; Author: Professor Krasso
; Date:   04 Mar 2020
; Modified by: Jason Cords
; Description: Exercise in pattern matching
; functions.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.2"),"\n"); //header


// 6 variables
var one = "truck";
var two = "car";
var three = "bike";
var four = "bike";
var five = "Four";
var six = "Three";

function match(a, b){ //function to match variables
  if(a === b){ // if statement to compare passed values
    return true; //if variables are the same, return true
  }
  else{ //if variables are not the same, return false
    return false;
  }
}

function logMismatch(a, b){ //function to log if match function returns false
  console.log(a + " and " + b + " do not match!");
}

function logMatch(a, b){ //function to log if match function returns true
  console.log(a + " and " + b + " do match!");
}

console.log(match("A", "B")); //logs match results as false
console.log(match(2, 2),"\n");  //logs match results as true

if (match(one, two)){ //if statement for first set of variables
  logMatch(one, two); //if match function returns true, call logMatch function
}
else {
  logMismatch(one, two); //if match function returns false, call logMismatch function
}

if (match(three, four)){ //if statement for second set of variables
  logMatch(three, four); //if match function returns true, call logMatch function
}
else {
  logMismatch(three, four); //if match function returns false, call logMismatch function
}

if (match(five, six)){ //if statement for third set of variables
  logMatch(five, six); //if match function returns true, call logMatch function
}
else {
  logMismatch(five, six); //if match function returns false, call logMismatch function
}
