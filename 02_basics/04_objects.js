//Objects-Part 2
/*As of last time we have talked that we can declare the object in singleton also,that is by the help of the
constructor*/
// we can declare the object in singleton by two different ways:-
const amazonUser = new Object()
console.log(amazonUser);//{} 
/*By this way we can declare the object by the help of new keyword we can declare the object by the object keyword 
and here it has returned the empty object as you can see above.*/
//the other way is that:-
const airUser = {}
console.log(airUser);//{}
// here we have directly declared the object 
/*
NOTE:-The only difference between these two is that the (amazonUser)object is the singleton object whereas the 
(airUser) is the Non-Singleton object.
*/
const amUser ={}
amUser.id = "123abc"
amUser.name = "aashirbad"
amUser.location = "berhampur"
amUser.designation = "project manager"
amUser.isloggedin = true
console.log(amUser);
/*OUTPUT:-
{
  id: '123abc',
  name: 'aashirbad',
  location: 'berhampur',
  designation: 'project manager',
  isloggedin: true
}
*/

const regularUser = {
    email: "am@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aashirbad",
            lastname: "padhi"
        }
    }
}
console.log(regularUser.fullname);//{ userfullname: { firstname: 'Aashirbad', lastname: 'padhi' } }
console.log(regularUser.fullname.userfullname);//{ firstname: 'Aashirbad', lastname: 'padhi' }
console.log(regularUser.fullname.userfullname.firstname);//Aashirbad
//there is something called as optional chaining which we will dicuss in further lectures.
 
//to combine the objects.
//As of now it will take time to name the keys as names thats why lets take the keys as number.
/*Assign :-The Object.assign() static method copies all enumerable own properties from one or more source 
objects to a target object. It returns the modified target object.*/
const obj1 = {1: "a",2: "b"};
const obj2 = {3: "c",4: "d"};
const obj3 = {obj1,obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
/*here the same problem came as in array it gave the mixed value of both the objects that it
seggregated that in obj3 there are 2 objects that is obj1 and it values & obj2 and its values.*/
//To solve this problem
const obj4 = Object.assign(obj1,obj2)/*Copy the values of all of the enumerable own properties 
from one or more source objects to a target object. Returns the target object)*/
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//here the value came but it is not garranted and an unexpeced value to make it as a garranted value :-
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } - And is a garranted output value. 
/*if we will not put thecurly braces then the obj1 becomes the target and the rest all becomes the source.
but if we are returning a new object then its better to give an empty object in first to make it as a target 
object and the rest all are the source objects.
Here the returned target as well the target object output is always same i.e.
Returned_target_object === Target_object.
*/

//But the most imp operator to add two of the objects is the Spread methodology:-
const obj6 = {...obj1,...obj2}// by usinfg te spread operator.
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }- till now is the easiest method

//You will use this syntax whenever the value will come from the database:-
//As the value from te database will come in the form of Array of Objects:-
// Array of Object means there will be an object inside an Array
const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com" 
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]
//to print the values of the objects which lies inside the array:-
console.log(user[1].email);//b@gmail.com
console.log(user[2].id)//3
console.log(user[0].id);//1
//so here you can notice that the indexing starts from 0 and the last value is n-1 as it is also an array.


// to print the keys,values and entries of the Object:-
//lets check what are the keys and the values of the amUser object
console.log(amUser);
/*
  id: '123abc',
  name: 'aashirbad',
  location: 'berhampur',
  designation: 'project manager',
  isloggedin: true
} */
//to find all the amUser keys:-
console.log(Object.keys(amUser));//[ 'id', 'name', 'location', 'designation', 'isloggedin' ]
//to find all the values of amUser:-
console.log(Object.values(amUser));//[ '123abc', 'aashirbad', 'berhampur', 'project manager', true ]
//to find all the entries of amUser:-
console.log(Object.entries(amUser));
/*[
  [ 'id', '123abc' ],
  [ 'name', 'aashirbad' ],
  [ 'location', 'berhampur' ],
  [ 'designation', 'project manager' ],
  [ 'isloggedin', true ]
]
  here each keys and values pairs are inside a particular seperate array.
 */
//here you can notice that all the output are in the form of arrays.
/*Sometimes you loop through the object and after looping you find an value while finding an value sometimes the 
value doesnot exist so there is a chances of crash.
so we can do two things:-
1 is we can validate it manually by checking each of the loop and each values
2 is we can ask thet is the value available of the process
*/
//hasOwnProperty - to check weather the object as the keys or not.
console.log(amUser.hasOwnProperty('designation'));//true
console.log(amUser.hasOwnProperty("detective"));//false

//lets check what are the different methods of the objects.
//CONSOLE
/*
const obj1 = {1: "a",2: "b"};
>>>undefined
obj1
>>>{1: 'a', 2: 'b'}
1: "a"
2: "b"
[[Prototype]]: Object
constructor: ƒ Object()//under the constructor there are more methods which are
    assign: ƒ assign()
    create: ƒ create()
    defineProperties: ƒ defineProperties()
    defineProperty: ƒ defineProperty()
    entries: ƒ entries
    ()freeze: ƒ freeze()
    fromEntries: ƒ fromEntries()
    getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
    getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
    getOwnPropertyNames: ƒ getOwnPropertyNames()
    getOwnPropertySymbols: ƒ getOwnPropertySymbols()
    getPrototypeOf: ƒ getPrototypeOf()
    groupBy: ƒ groupBy()
    hasOwn: ƒ hasOwn()
    is: ƒ is()
    isExtensible: ƒ isExtensible()
    isFrozen: ƒ isFrozen()
    isSealed: ƒ isSealed()
    keys: ƒ keys()
    length: 1
    name: "Object"
    preventExtensions: ƒ preventExtensions()
    prototype: {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
    seal: ƒ seal()
    setPrototypeOf: ƒ setPrototypeOf()
    values: ƒ values()
    arguments: (...)
    caller: (...)
    [[Prototype]]: ƒ ()
    [[Scopes]]: Scopes[0]
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: 
ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

// de-structuring - It takes place both in array as-well-as in the object
//But now lets talk about objects 
/*you will use this several times for example when you will work with the react hen you will find the objects then
you have to t=de-structure the objects then you have to take the values for further procedings.*/
const course ={
    coursename: "java script",
    price : "999",
    courseInstructor: "AI"
}  
//for instance if you have to print the couse instructor
console.log(course.courseInstructor)//AI
console.log(course.price);//999
/*suppose you have to print all the key values then every time course.xxx,course.xyz,course.zzz is not a clean as 
well as a professional code.*/ 
//to overcome this problem there is an syntax i.e.
// const {courseInstructor} = course;
// console.log(courseInstructor);//AI
const {courseInstructor,coursename,price} = course;
console.log(price);//999
console.log(courseInstructor);//AI
console.log(coursename);//java script

// if you want to change the name of the keys of the values then 
const { courseInstructor: instructor} = course;
console.log(instructor);//AI
//These are what called as de-structuring of the objects.



