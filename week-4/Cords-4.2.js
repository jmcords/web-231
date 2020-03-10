/*
============================================
; Title:  Exercise 4.2.js
; Author: Professor Krasso
; Date:   09 Mar 2020
; Modified by: Jason Cords
; Description: Creating in memory data with
; the use of arrays.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 4.2"),"\n"); //header

var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"]; //creates basic array with 5 string elements

getFruit(fruit); //calls function getFruit, passing array

function getFruit(arr){ //function with one parameter
  for (i=0; i < arr.length; i++){ //for loop to iterate until the end of the array
    console.log(arr[i]); //logs array from position of loop
  }
}
