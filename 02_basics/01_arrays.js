//array
/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple items 
under a single variable name, and has members for performing common array operations.*/

//Description on array:
/*
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

(1)JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are 
undesirable, use typed arrays instead.)
(2)JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as 
indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
(3)JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so 
on — and the last element is at the value of the array's length property minus 1.
(4)JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript 
objects create shallow copies, rather than deep copies).
*/
/* 
Shallow Copies:-A shallow copy of an object is a copy whose properties share the same references (point to the same 
underlying values) as those of the source object from which the copy was made. As a result, when you change either the 
source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a 
deep copy, in which the source and copy are completely independent.*/

/*
Deep Copies:-A deep copy of an object is a copy whose properties do not share the same references (point to the same 
underlying values) as those of the source object from which the copy was made. As a result, when you change either the 
source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with 
the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object 
to change too.
*/

const myarr = [1,2,3,4,5] /*arrays are always written inside the square brackets and inside the square brackets 
we call it as the elements and the elements can be of any thing i.e. boolean or stringwe still call it as an 
array.*/
const myheroes = ["shaktiman","batman","ironman","doremon"]//using string
console.log(myheroes[2]);//ironman as u can see that the index numbering starts from 0.
//Another way to declare an array
const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2[2]);//3 as u can see that the index numbering starts from 0.
/*By using the new keyword we can also declare a string and here there is no need to give the
square brackets the system will automatically take the square brackets.*/

//NOTE:- We also get the prototype access in the arrays where we get a property(.length) by which we can check the length.

/*
Array Methods:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array here is the link for the number of array methods
*/
