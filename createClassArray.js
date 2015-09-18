/**************
 * Script URI:  https://github.com/gabenix/snippits/createClassArray.js
 * Description: Dependable method of creating an array of all elements with a class name.
 * Author:      Gabriel Nix
 * Author URI:  http://www.gabenix.com
 **************/

/* Function to create array of all elements with a classname - execute after content loaded.
 * EXAMPLE: classArray(document.body,'myClass'); */
function classArray(node, className) {
	var a = [];
	var re = new RegExp('(^| )' + className + '( |$)');
	var els = node.getElementsByTagName("*");
	for (var i = 0, j = els.length; i < j; i++)
		if (re.test(els[i].className)) a.push(els[i]);
	return a;
}

/* Use this function to loop across your class array. 
 * EXAMPLE 1: classEx(myClassArray,myFunction); 
 * EXAMPLE 2: classEx(myClassArray,function(x){}); 
 */
function classEx(className, func) {
	for (var i = 0; i < className.length; i++) {
		if (i in className) {
			func(className[i]);
		}
	}
}

