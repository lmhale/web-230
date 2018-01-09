var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 5.4"));

// array-like object storing data about composers

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
    // filtering through array-like object by rating using .map and .foreach method
    console.log("-- COMPOSER BY RATING --");
    var composersByRating = Composers.map(function (composer) {

        return composer.Rating + "\n" + "Composer: " + composer.lastName
        
              }); 
        
        composersByRating.forEach(function(Rating) { console.log("Rating: " + Rating +"\n")});
        
        // filtering through array-like object by genre using .map and .foreach method
     console.log("-- COMPOSER BY Genre--");
     var composersByGenre = Composers.map(function(composer){
         return composer.Genre + "\n" + "Composer: " + composer.lastName
     });
      composersByGenre.forEach(function(Genre) {console.log("Genre: "+ Genre +"\n")});
       
        
        