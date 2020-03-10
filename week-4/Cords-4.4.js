/*
============================================
; Title:  Assignment 4.4.js
; Author: Professor Krasso
; Date:   10 Mar 2020
; Modified by: Jason Cords
; Description: Predicate function within an
; array filter function.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 4.4"),"\n"); //header

var state = ["South Dakota", "Montana", "Hawaii", "North Carolina", "Iowa"]; //array of 5 states


function getState (fi, value){ //getState function with 2 parameters
  if (fi === value){ // if statement with expression that fi equals value
    return true; //returns true
  }
}

console.log("-- ORIGINAL ARRAY --");

for (a = 0; a < state.length; a++){ //loop to log state array
  console.log(state[a]);
}

var sorted = state.sort(); //sort method called on original array, no arguments, so sorts alphabetically

console.log("\n-- SORTED ARRAY --");

for (a = 0; a < sorted.length; a++){ //loop to log sorted array
  console.log(sorted[a]);
}

console.log("\n-- SELECTED VALUE --");

console.log(state.filter(function (fi){return getState(fi, "North Carolina")})[0]);
/*
; filter method that calls getState function with each loop.
; Passes 2 values, the current looped value and matching value.
; logs the returned filtered array in the first position.
*/
