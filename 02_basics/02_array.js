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
