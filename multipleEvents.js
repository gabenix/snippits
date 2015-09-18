// KEEP YOUR CODE TIDY BY SEPARATING YOUR EVENTS
// This script allows you to easily declare
// multiple event listeners without bloating your code.

// This is the core template function.
function addEvent(type,func) {
	if (document.addEventListener) document.addEventListener('DOMContentLoaded', function(){
		window.addEventListener(type, func);
	});
	else if (document.attachEvent) document.attachEvent('DOMContentLoaded', function(){
		window.attachEvent('on'+type, func);
	});	
}

// Easily declare a new event like this.
addEvent('load', myFunction);
function myFunction(){
	// do something
}

// OR.. Like this.
addEvent('scroll', function(){ // do something });
