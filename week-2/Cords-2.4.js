/*
============================================
; Title:  Assignment 2.4.js
; Author: Professor Krasso
; Date:   26 Feb 2020
; Modified by: Jason Cords
; Description: Assignment in building and
; understanding functions
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 2.4")); //header

function fullName(firstName, lastName){       //function to combine name
  let fullName = firstName + " " + lastName;  //combines passed values with space in between
  return fullName;                            //returns combined value
}

function dateWriter(year, month, day){                                //function to write date format
  let date = new Date(year, month, day).toLocaleDateString('en-US');  //combines passed values and converts it to date format
  return date;                                                        //returns converted date
}

function formatNumber(number, numofFixedPositions){         //function to format passed string to fixed number
  let temp = Number(number).toFixed(numofFixedPositions);   //method to convert string to a number and convert to fixed number of positions from passed value
  return temp;                                              //returns number
}

function convertToInt(age){   //function to parse string to number
  let Int = parseInt(age);    //parses passed string to integer
  return Int;                 //returns integer
}

function convertToFloat(money){   //function to convert passed string to float number
  let float = parseFloat(money);  //parses passed string to float
  return float;                   //returns float number
}

var firstName = "Jason";    // test variables
var lastName = "Cords";
var year = "2020";
var month = "01";
var day = "26";
var number = "31.56";
var numofFixedPositions = "1";
var age = "30";
var money = "1234567.89"


console.log("\nHello, my name is " + fullName(firstName, lastName) + "!");
    //logs first line with function call to full name with tests vars
console.log("\nToday's date is " + dateWriter(year, month, day) + " and the current temperature is " + formatNumber(number, numofFixedPositions) + " degrees.");
    //logs second line with function calls to dateWriter and formatNumber with test vars
console.log("\nI am " + convertToInt(age) + " years old and my savings account goal is " + convertToFloat(money) + " dollars.");
    //logs third line with function calls to convertToInt and convertToFloat with test vars
