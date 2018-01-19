var header = require('../header.js');

console.log(header.display("Lauren", "Hale","Exercise 6.4"));

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var ticket = {
id: 4,
name:'84B',
dateCreated: date,
priority: 1,
personId:456,

person: {
id: 6,
firstName:'Lauren',
lastName:'Hale',
jobTitle: '(Software Engineer)',
}
};

console.log('Ticket ' + ticket.id + ' was created on ' +ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName +" " + ticket.person.lastName +' '+ ticket.person.jobTitle) +'.';


