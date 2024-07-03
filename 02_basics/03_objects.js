//objects:-

/*To declare an object there two ways:-
LITERALS 
CONSTRUCTOR
by both the methods the objects ar formed there is no performance difference but the only difference is by the 
constructor SINGLETON is formed whereas there is no singleton in literals.
*/
/*Here there is a concept called singleton which means when you form an object like constructor
then it forms an object-singleton and it is an object.
But if we declare the object like the literals then it doesnt forms singleton.*/

//object literals
const jsuser = {
    name: "lipun",
    "full name": "aashirbad padhi",
    first_name: "aashirbad",
    age: 18,
    location: "berhampur",
    "other loation": "sunabeda",
    email: "lipun@google.com",
    isloggedin: false,
    lastlogindays: ["mon","tue"]
}
//we can give any value that is string ,boolen ,numers ,object,array , fuction.....etc 
/*to access the values in the arrays we have to access by giving the index numbers there is no other way to access
the values of the arrays but in the case f the objects we can access the data values more efficiently like we can define 
both the keys as well as the objects  whereas  we don't get tye chance to define the key in arrays here only index
numbers will work.*/

//to access the objects there are 2 ways :-
//1st is:- by using .(dot) which is a vry common thing wich cameto your mnd but it is not the way it goes.
console.log(jsuser.email);//lipun@google.com
console.log(jsuser.first_name);//aashirbad
//but here you cant track the value of full name, it will show you error to access these type of data values the synax is:-
console.log(jsuser["full name"]);//aashirbad padhi
console.log(jsuser["other loation"]);//sunabeda
// so by the help of this syntax we can access these type of data values.

// symbol declaration:-
const mysym = Symbol("mykey1") 
const newsym = Symbol("mykey2")
//to use a symbol as a key in the object:-
const user = {
    name: "aashu",
    mysym: "mykey1", // if are you thinking of declaring a symbol like this then it is a wrong method as the output datatype will be string.
    [newsym]: "mykey2",// this is the correct way to declare a symbol in the object.
    designation: "project manager",
    company: "JP Morgan",
    age: 30,
    location: "Bengalore",
}
console.log(user.mysym);//mykey1
console.log(typeof(user.mysym));//string as said earlier the datatype here came as string.
//to access the symbol you have to use square brackets to write the key pairs.
console.log(user[newsym]);//mykey2
//this is the correct way to declare the symbols in an well organised format.

// to change any value of the object:- you just have to overwrite it.
jsuser.email = "aashirbad@google.com"
console.log(jsuser.email);//aashirbad@google.com

//to lock the values or to freeze the values of the objects then:-
Object.freeze(user);
user.age = 32
user.designation = "SDE"
console.log(user);
/*
{
  name: 'aashu',
  mysym: 'mykey1',
  designation: 'project manager',
  company: 'JP Morgan',
  age: 30,
  location: 'Bengalore',
  [Symbol(mykey2)]: 'mykey2'
}
you can notice that after freezing none of the values are changed.As well as you can notice that the symbol key itself states that it is
not a string it is syymbol datatype.
*/

//lets add the function to it :-