var header = require('../header.js');


console.log(header.display("Lauren", "Hale","Exercise 4.4"));

var states = ["Alabama","Nebraska","Iowa","California","Nevada"];

console.log("-- DISPLAYING Array Items --");
for (var y = 0; y < states.length; y++) {
    console.log(states[y]);
   
}
console.log("--Displaying Sorted Array--")

console.log(states.sort().join());
function getValue(el, value)
{
    if (el == value)
        return value;
}



console.log(" --Selected value-- ");
// output the results using the console.log() function
console.log (
 states.filter // built-in JavaScript function for returning a subset of records
    (
        function (el)
        {
            return getValue(el, "Iowa") // use the getFruit function to return a matching fruit
        }
    )[0] // return the first element in the return array
);

