/*
============================================
; Title:  Exercise-6.3.js
; Author: Professor Krasso
; Date:   23 Mar 2020
; Modified by: Jason Cords
; Description: Exercise in object literals.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 6.3"),"\n"); //header

var ticketing = { //creates object
  id: "34563", //object literals
  name: "Jason Cords",
  requestor: "Bob Dole",
}

console.log("id: " + ticketing.id + ", name: " + ticketing.name + ", requestor: " + ticketing.requestor); //logs in a string as starter code.
console.log("---OR---"); //logging the actual object somewhat appears to be more correct to the starter code since the curly brackets are there.
console.log(ticketing); //logs literals as an object string.
