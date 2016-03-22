/**
 * http://usejsdoc.org/
 */

//function init() {
//
//	// private
//	var count = 0;
//
//	// public
//	return {
//		doCount : function() {
//			count++;
//		},
//		getCount : function() {
//			return count;
//		}
//
//	};
//
//}
//
//var counter = init();


//---------------------------

// using IIFE / self executable func

var counter=(function(){
	// private
	var count = 0;

	// public
	return {
		doCount : function() {
			count++;
		},
		getCount : function() {
			return count;
		}

	};
})();


// --------------------------

// client

counter.doCount();
counter.doCount();

console.log(counter.getCount());
