/*
============================================
; Title:  Exercise-6.2.js
; Author: Professor Krasso
; Date:   01 Apr 2020
; Modified by: Jason Cords
; Description: Exercise in constructor functions.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 7.2"),"\n"); //header

function employee(id, firstName, lastName, title){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

var employees = [
  new employee(1, "Michael", "Cain", "President"),
  new employee(2, "Mike", "Jones", "Manager"),
  new employee(3, "Adam", "Sandler", "Janitor"),
  new employee(4, "John", "Cena", "Security"),
  new employee(5, "Jason", "Cords", "Developer")
];

employees.forEach(function(person){
 console.log(person.id +" " + person.firstName + " " + person.lastName + " " +person.title)
});
