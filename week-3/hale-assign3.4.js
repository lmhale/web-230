var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 3.2"));



for (x=1;x<10;x++){
    console.log(x,randomNumber());
}


var y = 3;

while (y<10){
console.log(y,randomNumber());
y++
}




function randomNumber() {
    return Math.floor((Math.random() * 10) + 1); 
}
