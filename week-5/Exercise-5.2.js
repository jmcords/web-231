/*
============================================
; Title:  Exercise 5.2.js
; Author: Professor Krasso
; Date:   18 Mar 2020
; Modified by: Jason Cords
; Description: Using forEach method to iterate
; through an array.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 5.2"),"\n"); //header

var food = ["pizza", "tacos", "croissant", "gummy worms", "chicken cordon bleu"]; //create array of 5 food types

food.forEach(function(food){ //using forEach method with the function as an argument.
  console.log(food) // logs food item of array.
});
