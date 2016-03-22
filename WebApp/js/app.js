/**
 * http://usejsdoc.org/
 */

//var box = document.querySelector(".jumbotron");
//var hideBtn = document.querySelector(".btn-danger");
//var showBtn = document.querySelector(".btn-primary");
//
//hideBtn.addEventListener('click', function(e) {
//	box.style.display = 'none';
//});
//
//showBtn.addEventListener('click', function(e) {
//	box.style.display = 'block';
//});


var box=jQuery('.jumbotron');
$('.btn-danger').click(function(){
	box.hide();
});
$('.btn-primary').click(function(){
	box.show();
});