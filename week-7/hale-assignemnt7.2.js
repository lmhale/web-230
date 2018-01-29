var header = require('../header.js');

console.log(header.display("Richard", "Krasso","Exercise 7.2"));

function Employee(id,firstName,lastName,title) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  
  }

 var employees = [];
 employees[0]= new Employee(1,"Thomas", "Edison", "Software Engineer");

 employees[1] = new Employee(2, "Benjamin","Franklin", "Programmer");
  
 employees[2] = new Employee(3,"Nikola","Tesla", "Project Manager");

 employees[3] = new Employee(4,"Charles","Babbage", "Product Manager");
 
 employees[4] = new Employee(5,"Alexander", "Bell", "Business Analyst");
    
    
    

for (var i = 0;i<employees.length; i++){
 var emp = employees[i];
console.log(emp.id + ` ${emp.firstName} ${emp.lastName} ${emp.title}`);

}


   