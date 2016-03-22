/**
 * http://usejsdoc.org/
 */


/*
 * 
 *  JS - function invocations patterns
 *  
 *  1. function invocation
 *  2. method invocation
 *  3. call/apply/bind invocation
 *  4. constructor
 * 
 * 
 *   'this' keyword 
 */



// why we need 'this'  keyword?

//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
//
//
//
//var p=person;
//person={name:'Ria'};
//
//p.sayName();


//----------------------------------------
//
//global.name='GLOBAL';
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//
////var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
////var p2={name:'Ria',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Ria',sayName:sayNameForAll};
//
//
//sayNameForAll(); // function-invocation     : this --> global-obj
//p1.sayName();  // method-invocation pattern : this --> invoker-obj
//p2.sayName();



//----------------------------------------


var util={
		sayName:function(message,from){
			console.log(message+' im '+this.name+":"+from);
		}
};

//

var p1={name:'Nag'};
var p2={name:'Ria'};



// Eager invocation

//util.sayName.call(p1,"Hello",'BLR');
//util.sayName.call(p2,"Hi",'CHN');

//util.sayName.apply(p1,["Hello",'BLR']);
//util.sayName.apply(p2,["Hi",'CHN']);

// Lazy Invocation


//var p1Func=util.sayName.bind(p1,"Hello",'BLR');
//var p2Func=util.sayName.bind(p2,"Hi",'CHN');


// on event
//p1Func();

//-------------------------------------------------



// 1000+ person objs

function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}

var p1=new Person('Nag',32);   // constructor-invocation : this --> new-obj
var p2=new Person('Ria',0.10);


// Person('abc',100);















