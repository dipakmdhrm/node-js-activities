var events = require('events');
var util = require('util');

var Person = function (name) {
  this.name = name
};

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Jill = new Person('Jill');
var Johan = new Person('Johan');

var people = [James, Jill, Johan];

people.forEach((person) => person.on('speak', (message) => console.log(`${person.name} said: ${message}`)));

James.emit('speak', 'Hey Jill, Hey Johan!!')
