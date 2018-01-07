var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 3.2"));


var And = " and ";
var MATCH = " do match!";
var MISMATCH = " do not match!";

function match (argument1,argument2) {
    if (argument1 === argument2)
    return true;
    else {
        return false;
    }
}


function logMismatch( argument1, argument2) {
    var logMismatchMessage = argument1 + And + argument2 + MISMATCH;
    console.log(logMismatchMessage);
}

function logMatch ( argument1, argument2 ) {
    var logMatchMessage = argument1 + And + argument2 + MATCH;
    console.log(logMatchMessage);
}


var one = "Truck";
var two = "Car";
var three = "Bike";
var four = "Bike";
var five = "Three";
var six = "Four";


console.log(match(one,two));
console.log(match(three,four));

if (match(one, two)) {
    logMatch(one, two);
} else {
    logMismatch(one, two);
}

if (match(three, four)) {
    logMatch(three, four);
} else {
    logMismatch(three, four);
}

if (match(five, six)) {
    logMatch(five, six);
} else {
    logMismatch(five, six);
}

