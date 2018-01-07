var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 3.4"));

// test variable
var test = 4;
var num =randomNumber();
var And = " and ";
var MATCH = " do match!";
var MISMATCH = " do not match!";


// for loop
console.log("-- Displaying for loop --");
for(i=0;i<10;i++){
    if( match(i, num) ){
        logMatch(i, num)
    }else{
        logMismatch(i, num)
    }
}





// while loop
console.log("\n-- Displaying while loop --"); 

var test2 = 0;
while (test2 < 10){
    
    if( match(test2, num) ){
        logMatch(test2, num)
    }else{
        logMismatch(test2, num)
    }
    test2++;
}


// Reused functions from exercise-3.2.js


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





// end program 


// ** DO NOT MODIFY OR REMOVE THIS FUNCTION **
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}


