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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array here is the link for the number
of array methods 
*/
myarr.push(6)
myarr.push(7,8)
console.log(myarr);//[ 1, 2, 3, 4, 5, 6, 7, 8 ]the push method adds the value to the array.
myarr.pop()//there is no requirement of giving any argument to the pop  method.
console.log(myarr);//[1, 2, 3, 4, 5, 6, 7 ] the pop method removes the last value inside the array.

myarr.unshift(9)
console.log(myarr);//[9, 1, 2, 3, 4, 5, 6, 7 ]it inserts the given value in the starting of the array.
/*Because it is inserted in the starting of the array because of that all the array values are shifted , as of now here there
are less value but it will consume a lot of time in the large projects and will prssurise the computer.
IT IS NOT OPTIMISED SO IT IS NOT USEFULL.*/
myarr.shift()//there is no requirement of giving any argument to the shift method.
console.log(myarr);//[1, 2, 3, 4, 5, 6, 7 ] the shift method removes the first value inside the array.

//there is some Q/A method in js generally we ask them the questions:-
console.log(myarr.includes(9))//false
console.log(typeof(myarr.includes(9)))//boolean

console.log(myarr.indexOf(5));//4
//lets check what the result come when we asks the index of a non existing number
console.log(myarr.indexOf(9));//-1
console.log(myarr.indexOf(19));//-1 if ask any non-existing value then it will ans it as -1 that says the value is not present

//join- Adds all the elements of an array into a string, separated by the specified separator string.
const newarr = myarr.join();
console.log(myarr);//[1, 2, 3, 4, 5, 6, 7 ]
console.log(newarr);//1,2,3,4,5,6,7
console.log(typeof(myarr));//object (array)
console.log(typeof(newarr));//string
// so from this we come to know that join method bind it with the new variable as well as it convert it into string also.\

//slice,splice
console.log("A",myarr);// A [1, 2, 3, 4, 5, 6, 7 ]
const myn1 = myarr.slice(1,4)
console.log(myn1);// [ 2, 3, 4 ]
console.log("B",myarr);// B [1, 2, 3, 4, 5, 6, 7 ]
const myn2 = myarr.splice(1,4)
console.log(myn2);// [ 2, 3, 4, 5 ]
console.log("C",myarr);// C [ 1, 6, 7 ]
/*So the difference between slice and splice methods is that in the slice method the range is not included.
And in the splice method the range is included....BUT there is a main difference between these two methods-
That the splice methods manipulates the original array that it removes the elements where as the slice
Methods dont.*/

/*
As we discussed earlier that there are so many methods of arrays in javascript:-
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
*/
//These are the array methods which will be practised within the upcoming future practises.