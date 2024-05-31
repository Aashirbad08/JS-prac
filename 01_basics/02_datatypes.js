"use strict"; //Treat all JS code as new version

// alert(3+3) // we are using nodejs not browser
/*In nodejs it will show error and as of in browser developer console it will
 show a popup and will reflect the desired output */

console.log(3+3) console.log("aashirbad") /*It will show error and a red colour
alert line will be visible in the 2nd console and as it will not print the output.*/
console.log(3+3); console.log("Aashirbad") /*Now it will not show any of the error 
bcz the semicolon(;) has been applied*/
// But this should be return in this format as code readibility is not performed
// So here Line Spacing is necessary.
// Code Readability should be given the atmost priority.
console.log(3+3); 
console.log("Aashirbad") /*The code should be written in this format giving priority
to Code Readability.*/


// ECMA Standards :- https://tc39.es/ecma262/#sec-intro
// MDN Reference - Provided by Mozilla Organization which is easily readable and recommended


// DATATYPES
/*number = 2 ^ 53
bigint = for large numbers
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)
undefined = kindda place holder for a value which is not defined yet (type = undefined)
symbol = uniquness*/

// lets understand by taking some examples
let name = "lipun" //string
let age = 21 //number
let isoggedIn = false //boolean
let state; //undefined datatype

// Now to verify what type of datatype it is
console.log(typeof "aashirbad"); //string
console.log(typeof 1111); //number
console.log(typeof undefined); //undefined
console.log(typeof null); //object
// there are 2 ways to check the type of datatype it is
console.log(typeof("aashirbad"));
console.log(typeof "aashirbad");


// Mistake in 7th line of code which is done to just explain this content