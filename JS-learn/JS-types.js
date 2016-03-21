/**
 * http://usejsdoc.org/
 */

// JS - DataTypes

// Simple Types ( primitives )

// -------------------------------------
// a. string
var name = "Nag";
var selection = 'a';
// console.log(typeof name);
// console.log(typeof selection);

// -------------------------------------

// b. number

var count = 12;
var cost = 12.12;

// console.log(typeof count);
// console.log(typeof cost);

// -------------------------------------

// c. boolean

var found = true;

// console.log(typeof found);

// -------------------------------------

// d. undefined

var person;
// console.log(typeof person);

// -------------------------------------

// e. null

var person = null;
//console.log(typeof person);
//
//console.log(person === null);


//---------------------------------------


var s="5";
var n=5;

//console.log(s===n);



//---------------------------------------

//
//
//console.log(undefined==null);   // true
//console.log(undefined===null);  // false


//----------------------------------------------------


// Reference Types ( objects )


/*
 * 
 *  How to create objects ?
 *  
 *  syntax
 *  
 *  var ref=new CF();
 *  
 *  ---------------------------
 *  
 *  CF --> constructor function
 *  
 *  how to identify constructor func ?
 *  
 *  if func uses 'camel-case' naming convention.
 * 
 * 
 * 
 * 
 */


var person=new Object();
person.name='Nag';
person.age=32;
person.doWork=function(){
	console.log('teaching JS');
};


//console.log(person.name);
//person.doWork();

delete person.age;

//console.log(person.age);


//----------------------------------------


// How to access obj's properties ?

/*
 *  2 ways
 *  
 *  way-1 : using '.' notation
 *  way-2 : using '[]' notation
 *  
 * 
 */

var person=new Object();
person.name='Nag';
person['full-name']='Nag N';


//console.log(person.name);
//console.log(person['name']);

//console.log(person['full-name']);

//----------------------------------------------


/*
 * 
 *   Some 'built-in' types in JS lang
 *   
 *   a. Object
 *   b. Array
 *   c. RegExp
 *   d. Function
 *   
 * 
 */


// a. Object

var person=new Object();
person.name='nag';
person.age=32;
person.doWork=function(){
	console.log('teaching JS');
};

// using literal style

var person={
		name  :'nag',
		age   :32,
		doWork:function(){
			console.log('teaching JS');
		}
};


//-------------------------------------


// b. Array

var colors=new Array();
colors.push('red');
colors.push('green');
colors[2]='blue';


//using literal style

var colors=['red','green','blue'];


//-------------------------------------

//c. RegExp

var re=new RegExp('\\d');
//console.log(re.test("123"));


//using literal style

var re=/\d/;
//console.log(re.test("abc"));




//-------------------------------------


// d. Function

var add=new Function("n1","n2","var result=n1+n2;return result");
console.log(add(12,13));


//using literal style

function add(n1,n2){
	var result=n1+n2;
	return result;
}

console.log(add(12,13));


//-----------------------------------------



















