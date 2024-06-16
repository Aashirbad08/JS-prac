/*
String - The String object is used to represent and manipulate a sequence of characters.
Strings are useful for holding data that can be represented in text form. Some of the most-used operations on 
strings are to check their length, to build and concatenate them using the + and += string operators, checking 
for the existence or location of substrings with the indexOf() method, or extracting substrings with the 
substring() method.
*/
const name = "lipun"
const repocount = 50
console.log(name + repocount + " Value");
// this is one of the syntax to add two or more strings.
/*but this type of syntax is not recommended as it is outdated and no one is interested in these type of syntax
in modern days.*/
/*In these modern days you have to use the backtick(`).The advantage of backtick here is the string interpolation 
which generally you create the placeholders in which any variable can easily be inserted.

Backtick(`):-The backtick(`) is a punctuation mark used mainly in computing and programming.
The backtick (`) character, also known as the backquote or grave accent, serves as a crucial tool
in JavaScript for creating strings with enhanced flexibility and readability. It introduces the concept of
template literals, providing us with a more concise and expressive way to construct strings compared to 
traditional methods.
Below are the uses of Backticks in Javascript:
Table of Content:-
Using Template Literals for String Interpolation
Using Template Literals for Multi-line Strings

Using Template Literals for String Interpolation:-
Template literals allow us to embed expressions directly within strings using ${} syntax. This facilitates 
dynamic interpolation of variables and expressions into strings, eliminating the need for cumbersome concatenation 
operations and enhancing code readability.

Using Template Literals for Multi-line Strings:-
With backticks, you can define multi-line strings directly within your code without resorting to string concatenation 
or escape characters like `\n`. This approach simplifies the representation of lengthy strings and improves code 
maintainability, especially for complex text structures like HTML templates or SQL queries.
*/
console.log(`Hello my name is ${name} and my repocount is ${repocount}.`);
// As you have seen this is one of the way to declare the string
// lets understand the other way by using the "new" keyword:
const gamename = new String("lipun-ap")
console.log(gamename);
/*So here the another syntax is used where the new keyword is used by which we can use all the objects of JS i.e. for 
now it is string and with in its constructor you will give the value i.e. here string.
The value will be same as of now the string is declared thereis no difference, infact behind the seen here the object
has also been invoked.
BUT THE INTERESTING THING IS 
When we paste the same syntaxin the console and when we gave the command to declare the value of gamename, then the value is 
UNDEFINED then when we declared what the gamename is it showed the detailed table of contents which is:-
const gamename = new String("lipun-ap")
undefined
gamename
String {'lipun-ap'}
0: "l"  //As of the posn dont get confused that it is a array, these are the string.
1: "i"  // these are the keyvalue pairs where 0,1,2,..,7 are te keys and l,i,p,..,p are the values of these keys.
2: "p"
3: "u"
4: "n"
5: "-"
6: "a"
7: "p"
length: 8
[[Prototype]]: String  //Now when we open the prototype then it should the various no of methods.
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
up: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()

[[Prototype]]: Object
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "lipun-ap"
TO MASTER ALL THESE METHODS IS THE ONLY CONCEPT OF READING STRING IN JS.
*/
/*
Its the best practiseto use string interpolation for concatination.
CONCATENATION - The meaning of CONCATENATION is a group of things linked together or occurring together in a way that 
produces a particular result or effect.
*/
let rating = "one"
console.log(`Aashirbad is a number ${rating} Student.`); //Aashirbad is a number one Student.

//Lets see some methods to discuss the strings in details:-
//strings MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/*String() constructor:- 
The String() constructor creates String objects. When called as a function, it returns primitive values of type String.
String() can be called with or without new, but with different effects.
When String() is called as a function (without new), it returns value coerced to a string primitive. Specially, Symbol 
values are converted to "Symbol(description)", where description is the description of the Symbol, instead of throwing.

When String() is called as a constructor (with new), it coerces value to a string primitive (without special symbol handling)
and returns a wrapping String object, which is not a primitive.

Warning: You should rarely find yourself using String as a constructor.*/

/*
anchor [String.prototype.anchor()] <a> :-
*/










// string will be uodated slowly as it is vast concept