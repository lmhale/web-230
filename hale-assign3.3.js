var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 3.3"));

var eventKeyCode = 13;

switch(eventKeyCode) {
    case 13:
    console.log("The enter key was pressed");
    break;
    case 16:
    console.log("The shift key was pressed")
    break;
    case 32:
    console.log("The spacebar key was pressed")
    break;
    case 8:
    console.log("The backspace / delete key was pressed");
    break;
    case null:
    console.log("Unrecognized key press"); 
}
    console.log(eventKeyCode);

