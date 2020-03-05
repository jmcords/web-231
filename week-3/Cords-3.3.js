/*
============================================
; Title:  Exercise 3.3.js
; Author: Professor Krasso
; Date:   04 Mar 2020
; Modified by: Jason Cords
; Description: Exercise in control statements
===========================================
*/

const header = require('../Cords-header.js');

console.log(header.display("Jason", "Cords", "Exercise 3.3"),"\n"); //header

let eventKeyCode = 13 //populating variable eventKeyCode

switch (eventKeyCode) { //switch statement passing eventKeyCode variable
  case 13: //case for eventKeyCode being 13
    console.log('The enter key was pressed.')
  break;
  case 16: //case for eventKeyCode being 16
    console.log('The shift key was pressed.')
  break;
  case 32: //case for eventKeyCode being 32
    console.log('The spacebar key was pressed.')
  break;
  case 8: //case for eventKeyCode being 8
    console.log('The backspace / delete key was pressed.')
  break;
  default: //case for eventKeyCode being none of the cases
    console.log('Unrecognized key.')
  break;
}
