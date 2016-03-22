/**
 * http://usejsdoc.org/
 */

var tnr = {
	name : 'Nag',
	doTeach : function() {
		
		console.log(this.name + " teaching JS");
		var that=this;
		function learn() {
			console.log('learning JS from ' + that.name);
		}
		var emp={name:'CTS'};
		
		//learn(); : function invocation : this --> global
		learn.call(emp);  // call/bind invocation pattern 
	}
};



var newTnr=tnr;
tnr={};

newTnr.doTeach();



