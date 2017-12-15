var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 3.2"));

var truck = 7;
var car = 4;
var bikeOne = 2;
var bikeTwo = 8;
var bikeThree = 4;
var bikeFour = 6;

function match(x,y){
if (x == y) {
    console.log(true);
} else {
    console.log(false);
}

}
console.log(match(car,bikeThree));
console.log(match(truck,car));

function logMismatch(a,b) {
if (a!=b)
    console.log("Truck and car do not match!");
}
console.log(logMismatch(truck,car));

function logMatch (c,d) {
if(c == d) {
    console.log( "Bike and Bike do match!");
  
}
}


if (truck == car) {
    logMatch();
} else {
    logMismatch();
    
}


if (car < bikeFour) {
    logMatch();
}else {
    logMismatch();
} 

if (bikeThree > bikeFour) {
    logMatch();
}else {
    logMismatch();
} 

if (bikeTwo =! bikeOne) {
    logMatch();
} else {
    logMismatch();
}


if (truck < bikeOne) {
    logMismatch();
} else {
    logMatch();
}

if (bikeThree < bikeTwo) {
    logMatch();
}else {
    logMismatch ();
}
