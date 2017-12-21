var header = require('../header.js');


console.log(header.display("Lauren", "Hale","Exercise 4.3"));

var vehicles =["Car","Truck","Motorcycle","Airplane","Bus"];

function getValue(vehicles, filterValue) {
    for (var x = 0; x < vehicles.length; x++) {
        if (vehicles[x] === filterValue) {
            return vehicles[x];
        }
    }
}
   
console.log("-- DISPLAYING Array Items --");
for (var y = 0; y < vehicles.length; y++) {
    console.log(vehicles[y]);
}

console.log("\n");

//testing filter 
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Bus"));

console.log("\n");

//testing filter
console.log(" -- SELECTED VALUE --");
console.log(getValue(vehicles, "Motorcycle"));