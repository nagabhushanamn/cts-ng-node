/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName = function() {
	// console.log('im ' + this.name);
	// };
}

Person.prototype.sayName = function() {
	 console.log('im ' + this.name);
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Ria', 1);