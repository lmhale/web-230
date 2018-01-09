var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 5.3"));

//Array-like object

console.log("-- COMPOSERS --");

var Composers = [

    {
    lastName: 'Beethoven',
   
    Genre:'Classical',
   
    Rating:8,
    
    },
    
    {
    
    lastName: 'Mozart',
    
    Genre:'Classical',
    
    Rating:10,
    
    },
    
    {
    
    lastName: 'Bach',
    
    Genre:'Classical',

    Rating:'9',

    
    },
    
    {
    
    lastName: 'Haydn',
    
    Genre:'Classical',

    Rating:6,

    
    },
    
    {
    
    lastName: 'Schubert',
    
    Genre:'Classical',

    Rating:5,
    
    },
    
    ];

    // .foreach method iterating over array-like object 
    
    Composers.forEach(function(composer) {console.log("Last Name:"+ " " + composer.lastName +","+ " Genre: " + composer.Genre + ","+" Rating: "+ composer.Rating)});