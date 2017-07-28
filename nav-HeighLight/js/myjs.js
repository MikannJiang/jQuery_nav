$(function(){
	//get index
	var index = window.location.href.split('/').length-1;
	//get str
	var href = window.location.href.split('/')[index].substr(0,3);
	console.log(href);
	//add class
	$(".list li a[href^='"+href+"']").addClass('on');


});