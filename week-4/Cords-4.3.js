/*
============================================
; Title:  Exercise 4.3.js
; Author: Professor Krasso
; Date:   09 Mar 2020
; Modified by: Jason Cords
; Description: Filtering data within an array.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 4.3"),"\n"); //header

var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"]; //creates string array with 5 elements

function getValue(arr, str){ //getValue function with 2 parameters, an array and a value
  for (var a = 0; a < arr.length; a++){ //for loop to iterate until the end of the array
    if (arr[a] === str){ // if statement that calls body if array element string matches passed value
      console.log(arr[a]); //logs array element that matches
    }
  }
}

console.log("-- DISPLAYING ARRAY ITEMS --");
  for (var b = 0; b < vehicles.length; b++){ //for loop to iterate until the end of the array
    console.log(vehicles[b]); //logs current array element
  }

console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle"); //calls getValue function with passed array and value

console.log("");
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus"); //calls getValue function with passed array and value
