var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 6.2"));

// try and catch program that throws an error if the average of x and y does not equal 5

try {
var x = 4;
var y = 3;
var sum = x+y;
var aver = sum /2;

if (aver !== 5) throw "Expected value not logged";
console.log(aver);


}catch (err) {

   console.log("Catch clause: " + err);   

}finally {
    console.log("Finally clause: End of program ...");
}
