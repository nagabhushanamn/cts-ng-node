/**
 * http://usejsdoc.org/
 */

/*
 * 
 * 
 * 2 - ways to define/create function(s) in JS lang
 * 
 * a. function declaration
 * 
 * on loading js file , function-obj will get created..
 * 
 * b. function expression
 * 
 * at runtime ,
 * 
 */

// a. declaration
// console.log(add(12,13));
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));
// -----------------------------
// b. expression
// console.log(add(12,13));
var add = function(n1, n2) {
	return n1 + n2;
};
// console.log(add(12,13));

// ------------------------------

// function as values

// function sayHello(){
// console.log('Hello...');
// }
//
//
// var sayHi=sayHello;

// sayHi();

// ------------------------------

// imp point :-

/*
 * in JS , falsy values
 * 
 * 1. false 2. null 3. undefined 4. "" 5. 0
 * 
 */

// ------------------------------
// function as arguments
function sayHello(greetFunc) {
	if (greetFunc) {
		greetFunc();
		return;
	}
	console.log("Hello");
}

// sayHello();
// sayHello(function() {
// console.log('ola..');
// });

// e.g

var nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
// nums.sort();

// nums.sort(function(a, b) {
// return b - a;
// });

// ES-6

// nums.sort((a,b)=>{return a-b;});

// console.log(nums);

// ------------------------------

// functions as return values

function teach() {
	console.log('im teaching....');
	function learn() {
		console.log('im leaning...');
	}
	return learn;
}

// var learnFunc=teach();
//
// learnFunc();
// learnFunc();

// -------------------------------------

function reflect(arg1, arg2) {
	console.dir(arguments);
	return arguments['0'] + " " + arguments[1];
}
//console.log(reflect(12));


// ES-6

//function f1(a=0){
//	console.log(a);
//}
//
//f1();

//------------------------------------------


// variable scope

var v=100;  // global scope

function f(){
	var v;     // hoisting  ( lifting-up var declaration to top)
	console.log(v);
	var v=200;   // function scope
}

//f();


// best practice : use 'Single-var design pattern '


function sum(){
	
	var i=0,
	    result=0,
	    len=arguments.length;
	
	while(i<len){
		result*=arguments[i];
		i++;
	}
	
	return result;
}

//console.log(sum(1,2,3,4,5,6,7,8,9,10,'a'));



//-----------------------------------------------------



//function f(){
//	'use strict';
//	 vv=100;
//}
//f();
//console.log(vv);
//



//-----------------------------------------------------


// 'this' keyword in JS

//----------------------------------------

// why we need 'this' keyword ?

var person={
		name:'Nag',
		sayName:function(){
//			console.log('im '+person.name);
			console.log('im '+this.name);
		}
};

//person.sayName();

var oldPerson=person;
person={name:'Riya'};

//oldPerson.sayName();


//----------------------------------------

global.name='GLOBAL';

function sayNameForAll(){
	console.log('im '+this.name);
}

//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};
//

var p1={name:'Nag',sayName:sayNameForAll};
var p2={name:'Ria',sayName:sayNameForAll};

//sayNameForAll();  // im ??    // function invocation : this --> global-obj
//p1.sayName();     // im Nag   // method invocation   : this --> invoker-obj
//p2.sayName();     // im Ria

//------------------------------------------------------


var greetUtil={
	sayName:function(message,from){
		console.log(message+' im '+this.name+", from "+from);
	}
};


var p1={name:'Nag'};
var p2={name:'Ria'};


// eager invocation

//greetUtil.sayName.call(p1,"Hello","BLR");   // call/bind invocation pattern
//greetUtil.sayName.call(p2,"Hi","CHN");



// lazy invocation

var newFunc=greetUtil.sayName.bind(p2,"Hi","CHN");

// if greet-event
//newFunc();

//--------------------------------------------------------


function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}


var p1=new Person('Nag', 32);   // constructor invocation  : this --> new-obj
var p2=new Person('Ria', 0.10);
///

Person('Abc',13);
//-----------------------------------------------------





































