/*
============================================
; Title:  Assignment-6.4.js
; Author: Professor Krasso
; Date:   25 Mar 2020
; Modified by: Jason Cords
; Description: Assignment in nested object literals.
=============================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 6.4"),"\n"); //header

var ticket = { // object literal
  id: 8675309, //objects
  name: "100_percent.pak file missing",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "0",
  person: { //nested object literal
    id: 00000001, //nested objects
    firstName: "Michael",
    lastName: "Jones",
    jobTitle: "Lead Developer"
  }

};

console.log("Ticket " + ticket.id + " was created on " + //logging objects and nested objects
  ticket.dateCreated + " and assigned to employee " + ticket.person.firstName +
  " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
