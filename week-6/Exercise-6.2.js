/*
============================================
; Title:  Exercise-6.2.js
; Author: Professor Krasso
; Date:   23 Mar 2020
; Modified by: Jason Cords
; Description: Exercise in exception handling.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 6.2"),"\n"); //header

try { //try statement that doesn't make sense
  var x;
  var y = 3;
if (x == null) throw "There is nothing here!"; //if var is empty, throw statement
  console.log(x);
}

catch (e) { //catches thrown statement as object "e"
  console.log("Catch clause: " + e);
}

finally { //finally block that is always executed after a try
  console.log("Finally clause reached...");
}
