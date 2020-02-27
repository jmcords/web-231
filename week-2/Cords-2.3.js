
/*
============================================
; Title:  Exercise 2.3.js
; Author: Professor Krasso
; Date:   23 Feb 2020
; Modified by: Jason Cords
; Description: Exercise in function properties
;===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 2.3"));

function myName(){ //creates function with zero parameters
  return myName.Jason; //returns property created below
}
myName.Jason = "Jason Cords"; //creates function property

console.log("\nHello", myName(),"!"); //logs property that was returned by the function
