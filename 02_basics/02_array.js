// 02-array

const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["batman","superman","flash"]
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);//[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]
/*when we try to merge the two array in js we assume that the two of the array will merge without 
any hessitation,but then we notice that the 1st array took the 2nd array as an element which means
it takes the array inside the 1st one in o/p. In js the array takes any kind of entry data like it 
is not necessary that all the elements will be string only,we can give booleans,objects,etc.. 
here it took the 2nd array as the entry data to the 1st one.
***The push() method of Array instances adds the specified elements to the end of an array and returns
the new length of the array.It change in the current existing array.***
In the o/p we can clearly see that it took the 2nd array as the 4th element within the array.*/

//To access any of the element within these arrays:-
console.log(marvel_heroes[3]);//[ 'batman', 'superman', 'flash' ]
//To access any of the element within the 2nd array that is the 4th element
console.log(marvel_heroes[3][1]);//superman

/*NOTE:- Its not a good syntax and we shouldn't merge the arrays like this because it is not a clean
code as well as it is very confussing to perform.*/

//concat
const fruits = ['banana', 'apple' ,'orange']
const veges = ['tomato', 'potato', 'chilli']
const all_foods = fruits.concat(veges);
console.log(all_foods);//[ 'banana', 'apple', 'orange', 'tomato', 'potato', 'chilli' ]

/*The concat() method of Array instances is used to merge two or more arrays. This 
method does not change the existing arrays, but instead returns a new array.
As like here we have craeted an new array as all_foods.*/

//There is one more operator/method to add two or more of the array.
/*spread operator:-
Spread syntax can be used when all elements from an object or array need to be included in a new array 
or object, or should be applied one-by-one in a function call's arguments list. There are three distinct 
places that accept the spread syntax:
Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' })*/

const all_new_foods = [...fruits,...veges]
console.log(all_new_foods);//
console.log(all_new_foods);//[ 'banana', 'apple', 'orange', 'tomato', 'potato', 'chilli' ]
/*Here you can see that all the foods have been easily available and we have easily got all the values.
here we can spread two arrays.As we are putting 3dots then it is not an array all the values have spreaded.
inside the all_new_foods these are the individual spreaded values not an array.
HERE we can also use the concat opertor but generally you will see that spread operator is being used as it is more 
convienent andwell optimised.
*/
/*flat:-
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_anoter_array = another_array.flat(Infinity);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// const real_anoter_array = another_array.flat(1);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const real_anoter_array = another_array.flat(2);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
//here within the flat sq brackets there you have togive til what depth you need to solve.
console.log(real_anoter_array);

//Lets discuss an array you will be using frequently specially when you are data scraping.
//here you can ask the questions also and also you can convert it
//lets try some Q/A
console.log(Array.isArray("aashirbad"));//false
//lets se how to convert in array
console.log(Array.from("aashirbad"));//[ 'a', 'a', 's', 'h', 'i', 'r', 'b', 'a', 'd' ]
//To convert the values into array format instead of isarray we use from to convert it.
//lets check to convert object into array:-
console.log(Array.from({name: "lipun"}));//[]
/* it is an interesting case for the intwerview as it cannot convert it directly.we have to give weather we have to
make say weather to make the array of the key or of value. If it cannot make the array then it will always returns 
the empty array.we will learn it in further studies. 
*/

let score1 = 100
let score2 = 200
let score3 = 300
//array.of :- Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

//in array isArray,from,of are most important.
//you will learn array more when we will work in Node.js,backend and small scale projects.