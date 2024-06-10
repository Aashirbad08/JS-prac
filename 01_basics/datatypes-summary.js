// DataTypes of JavaScript Summary:-
/* Primitive Types - 7 Categories
These primitive datatypes are generally of Call By Values.
The 7 categories are - String,Number,Boolean,null,undefined,symbol,BigInt

SYMBOL - To make a value unique the user uses the symbol datatype. Specially in advanced JS 
development user sometimes want to make a button unique then this datatype is used.
BigInt - Used when the numerical value is too large.

This iz what called as Primitive Datatype. 
*/
/*Non Primitive Datatype or Reference Type:-
Array,Object,Function
*/


/*Difference between Call By Value and Call By Reference
In call by value method of parameter passing, the values of actual parameters are copied 
to the function’s formal parameters.
There are two copies of parameters stored in different memory locations.
One is the original copy and the other is the function copy.
Any changes made inside functions are not reflected in the actual parameters of the caller.

WHERE AS

In call by reference method of parameter passing, the address of the actual parameters is
passed to the function as the formal parameters. In C, we use pointers to achieve call-by-reference.
Both the actual and formal parameters refer to the same locations.
Any changes made inside the function are actually reflected in the actual parameters of the caller.
*/

// JAvaScript as a Dynamically Typed Language
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
and you do not need to explicitly declare the type of a variable before using it. You can assign different
types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

On the other hand, statically typed languages require you to declare the variable's type explicitly, and the
type checking is done at compile-time, before the code is executed.
Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable
type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully.
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

const score = 100; //number
const scorevalue = 100.3; //number
const isloggedin = false; //boolean
const outsideTemp = null; //null which means it is completely empty
let userEmail; //undefined
let userEmail1 = undefined; //undefined

// TO pass Symbol datatype:-
const id = Symbol("123");
const anotherid = Symbol("123")
/*
In this case you might be thinking that these 2 values are same but these 2 values are different bcz of sybol datatype
This is the only work of the symbol to make things  different as if you pass the same value then also the resultng
output is different.
Lets Check
*/
console.log(id === anotherid); //false
// As you can see the resulting output is different.

// Array
const heros = ["batman","Spiderman","Ironman"]
// the arrays are written within the square brackets as written above.

//Object
let myobj ={
    name : "aashirbad",
    age : "22",
}
/* Inside the curly braces all the contents are values and the datatype can be of anything i.e. String,Number,Boolean,null,
undefined,symbol,BigInt,Array,Function or it can be another object too.*/

//Syntaxof declaring a function
/*
function(){}; ----- defination of a function
functions can be declared with many types but as of now we will declare it using variables.*/
const myfunction = function(){
    console.log("hello world");
}
// Now to know what type of datatype a value or a variable is
//We will use typeof operator to identify it
console.log(typeof myobj); //object

// But by the theory of ECMA Script what value the typeof operator will give :-
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
All the primitive datatype are returned as functions and the functions type is generally known as object function.*/

/*Reference of ECMA Script for typeof operator results.
https://262.ecma-international.org/5.1/#sec-11.4.3
*/
