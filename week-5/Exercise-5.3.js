/*
============================================
; Title:  Exercise 5.3.js
; Author: Professor Krasso
; Date:   18 Mar 2020
; Modified by: Jason Cords
; Description: Creating an object collection
; and logging select data.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 5.3"),"\n"); //header

var composers = [ //creating an object collection array
  {
    firstName: "Hans",
    lastName: "Zimmer",
    genre: "Minimalist",
    rating: 8
  },
  {
    firstName: "Klaus",
    lastName: "Badelt",
    genre: "Classical",
    rating: 6
  },
  {
    firstName: "Alexandre",
    lastName: "Desplat",
    genre: "Contemporary",
    rating: 9
  },
  {
    firstName: "Marco",
    lastName: "Beltrami",
    genre: "Instrumental",
    rating: 7
  },
  {
    firstName: "Javier",
    lastName: "Navarrete",
    genre: "Contemporary",
    rating: 4
  }
];

composers.forEach(function(artist) { ////using forEach method with the function as an argument passing the array
  console.log( //logs argument.object
    "Last Name: " + artist.lastName + ", Genre: " + artist.genre + ", Rating: " + artist.rating
  )
});
