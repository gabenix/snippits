function addEvent(type,func) {
	if (document.addEventListener) document.addEventListener('DOMContentLoaded', function(){
		window.addEventListener(type, func);
	});
	else if (document.attachEvent) document.attachEvent('DOMContentLoaded', function(){
		window.attachEvent('on'+type, func);
	});	
}

addEvent('load', myFunctionA);

function myFunctionA(){
	// do something
}

addEvent('load', myFunctionB);

function myFunctionB(){
  // do something
}

addEvent('scroll', function(){ // do something });
