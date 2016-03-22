/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;

	var that=this;
	
	setInterval(function() {
		that.age++;
		console.log(that.name + ":" + that.age);
	}, 1000);

}

var p=new Person('Ria', 0);

