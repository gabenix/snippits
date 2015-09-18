/**************
 * Script URI:  https://github.com/gabenix/snippits/createClassArray.js
 * Description: Create an array of all elements with a class name.
 * Author:      Gabriel Nix
 * Author URI:  http://www.gabenix.com
 **************/

/* Function to create array of all elements with class - placed in onLoad event.
 * EXAMPLE: classArray(document.body,'myClass'); */
function classArray(node, class) {
	var a = [];
	var re = new RegExp('(^| )'+class+'( |$)');
	var els = node.getElementsByTagName("*");
	for(var i=0,j=els.length; i<j; i++)
		if(re.test(els[i].class))a.push(els[i]);
	return a;}

/* Use this function to execute code on your class array. 
 * EXAMPLE: classEx(myClass,myFunction); */
function classEx(class,func){
for (var i = 0; i < class.length; i++) {
	if (i in class) {
	func(class[i]);	
}}}

