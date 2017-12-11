
var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 2.4"));


function fullName(firstName, lastName) {
  return firstName + " " + lastName;  
  
    
    }

    var sum=fullName('Lauren','Hale');
   

function dateWriter(year,month,day) {
return year +'/' + month +'/' + day;
}
var dt = new Date();
var m = dt.getMonth()+1;  
var d = dt.getDate();  
var y = dt.getFullYear(); 



function formatNumber(number,fixedPosition) {
return number + " " + fixedPosition;
}
var temperature = 61;
var decimal =temperature.toFixed(1);
var degrees = "degrees farenheit";



function convertToInt(yearsOld) {
   
    return parseInt(24);
    }
    var age =24;
    

     function convertToFloat(money) {
        return parseFloat(1.5 +'million');
        }
        
  var savings =1.5 + 'million';
 


  console.log("\n"+"Hello my name is"+ " " + sum + "!" + "\n" + "Today's date is" +" " + dateWriter(y,m,d) + " " +"and the temperature is" + " " + formatNumber(decimal,degrees) + "\n" + "I am" +" ", + convertToInt(age) + " " + "years old and my savings account goal is" + " " + convertToFloat(savings) +" "+ "million dollars");