/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 19 Feb 2020
; Modified By: Jason Cords
; Description: Types, Values, and Variables
;===========================================
*/ 

var firstName = "Jason";
var lastName = "Cords";
var address = "123 New St.";
var payRate = 27.50;
var hireDate = new Date(2012, 4, 7);  /* assigning variables*/

console.log(firstName, lastName, address, payRate.toFixed(1), hireDate.toLocaleDateString()); /*logs output and formats hireDate and payRate */

var firstName = "Michael";
var lastName = "Martin";
var address = "363 Industrial Rd.";
var payRate = 19.95;
var hireDate = new Date(2015, 6, 19);  /* assigning variables*/

console.log(firstName, lastName, address, payRate.toFixed(1), hireDate.toLocaleDateString()); /*logs output and formats hireDate and payRate */

var firstName = "Allison";
var lastName = "Williams";
var address = "913 Poplar Dr.";
var payRate = 32.99;
var hireDate = new Date(2011, 0, 2);  /* assigning variables*/

console.log(firstName, lastName, address, payRate.toFixed(1), hireDate.toLocaleDateString()); /*logs output and formats hireDate and payRate */
