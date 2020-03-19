/*
============================================
; Title:  Assignment 5.4.js
; Author: Professor Krasso
; Date:   18 Mar 2020
; Modified by: Jason Cords
; Description: Creating an object collection
; and filtering data with map function.
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Assignment 5.4"),"\n"); //header

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

var rateComposer = composers.map(function(rate) //creating a new array with map function filtering original array
  {
    return "Rating: " + rate.rating + "\nComposer: " + rate.lastName + "\n"
  }
);

var genreComposer = composers.map(function(genre) //creating a new array with map function filtering original array
  {
    return "Genre: " + genre.genre + "\nComposer: " + genre.lastName + "\n"
  }
)

console.log("-- COMPOSER BY RATING --");
rateComposer.forEach(function(rating) //logs new array in a loop
  {
    console.log(rating)
  }
);

console.log("-- COMPOSER BY GENRE --")
genreComposer.forEach(function(gen) //logs new array in a loop
  {
    console.log(gen)
  }
);
