let score = "33abc"
console.log(typeof score);

// Now lets see how to convert any datatype into Number
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //to check whether it is converted or not
console.log(valueInNumber);

// 33 = 33
// "33" = 33
// "33abc" = NaN (NaN = Not a Number)
// "true" = 1; "false" = 0;

// Now lets see how to convert any datatype into Boolean
let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 = true; 0 = false;
// "" = false (Empty string turned out to be false)
// "abcd" = true (valued string turned out to be false)

// Now lets see how to convert any datatype into String
let somenumber = 33
let stringnumber = String(somenumber);
console.log(stringnumber); //to convert it into string
console.log(typeof stringnumber); //to check whether it is converted or not


// ************************OPERATION*************************


let value = 9
let negvalue = -value
console.log(negvalue);

console.log(2+2) //addition
console.log(2-2) //substraction
console.log(2*2) //Multiplication
console.log(2**3) //m raise to the power n
console.log(2/3) //Division
console.log(2%2) //Remainder

// To add two strings
let str1 = "hello"
let str2 = " Aashirbad" /*here a space is given after so that after addn there will be
space between the 2 different strings*/
let str3 = str1 + str2
console.log(str3);

// Now lets just see how some conversions takes place
console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
console.log(1+2+"3"+"4"); //334
console.log("3"+"4"+1+2); //3412
/*This says in JS the string to number conversion  is confusing i.e. if the string is in first place
then JS visualize all the value as string and will give the o/p in string value & if the first value
is number itself the it will give the o/p in Number Format but the datatype will be string*/

// Some more investigation
let abc = ("3"+"4")
let abcd = (abc + 1+2)
console.log(abcd); //3412
console.log(typeof abcd); //String
// here it is clear that if the string is first the JS will print the o/p in string only

// Lets Take one More eg to check in Number Format
let cde = (1+2 + "3"+"4");
console.log(cde); //334
console.log(typeof cde); //String
/*so here you can notice that the o/p is 334 and it is exicuted by JS in Number Format but the o/p
is in string format*/

// Some more investigation on Boolean Formats
console.log(true); //true
console.log(+true); //1
console.log(true+); //Error
console.log(+""); //0
/*this type of code should not be written as it is very confusing and neither it is adoptable and
nor it is readable*/

let num1,num2,num3
num1 = num2 = num3 = 2+2
// not a good way to declare the variable this way 

let gamecounter = 100
gamecounter++;
console.log(gamecounter); //101
// this is a postfix operation and the result is 101 as it is incremented once

let efgh = 100
++efgh;
console.log(efgh); //101
// this is a prefix operation and the result is 101 as it is incremented once
/*as you can see there is no difference between prefix and postfix in this example of JS but there
is a lot difference between prefix and postfix which will be explained further*/

/*if you want to learn about prefix and postfix then just refer to
// ECMA Standards :- https://tc39.es/ecma262/#sec-intro
// MDN Reference - Provided by Mozilla Organization which is easily readable and recommended*/


// Mistake in 80th line of code which is done to just explain this content