/**
 * http://usejsdoc.org/
 */

function tng() {

	console.log('tng........');

	var notes = 'JS notes';

	function learn() {
		console.log('learning with ' + notes);
	}

	return learn;

}

var learnFunc = tng();

learnFunc();
learnFunc();
