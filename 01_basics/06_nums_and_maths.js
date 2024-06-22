const score = 400;
console.log(score);//400
console.log(typeof(score));// so here we knew that js automatically detect it as number.
//but sometimes we can exclusively define that the output should be number only for that :-
const balance = new Number(1000)//by using the new keyword
console.log(balance); //[Number: 1000]
//here the output specially specified that it is a number so this is the only small difference what we get from the "new" keyword.
//but you will see the main difference in the console that it will show some of the properties that is:-
/*
const balance = new Number(1000)
console.log(balance);
Number {1000}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 1000

The study of these properties or methods is only known as the study of numbers.
*/
//Lets see some of the examples of these methods or properties

/*toString:- to convert the number into the string variable and infact the output which has been converted into the string also has 
all the additional string properties*/
console.log(balance.toString());
console.log(balance.toString().length); //4 which means the lenght of the string is 4

/*toFixed:- The toFixed() method returns a string representation of a number without using exponential notation and with exactly digits 
digits after the decimal point.The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it 
has the specified length.*/
console.log(balance.toFixed(3))//1000.000
console.log(typeof(balance.toFixed(3)))// it is clearly visible that the output is string datatype.
//recommended to use 2 as the precesion value and this is generally used when we make the e-commerce application.

//we can use the precesion value in many different ways
/* toPrecision:-The toPrecision() method of Number values returns a string representing this number to the specified precision.
A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.
If the precision argument is omitted, behaves as Number.prototype.toString(). 
If the precision argument is a non-integer value, 
it is rounded to the nearest integer.
*/
const newbalance = 20.8386;
console.log(newbalance.toPrecision(4));//20.84 - rounded to the givrn precised value.
console.log(typeof(newbalance.toPrecision(4)));// returns the string contains a number represented either in exponential or fixed point notation.
//generally it gives the precised and rounded of values.

/*
toLocaleString:-The toLocaleString() returns a number as a string, using local language format.
Bydefault the language format depends on the locale setup on your computer.
you can change the desired local currency specified below:-
ar-SA Arabic (Saudi Arabia)
bn-BD Bangla (Bangladesh)
bn-IN Bangla (India)
cs-CZ Czech (Czech Republic)
da-DK Danish (Denmark)
de-AT Austrian German
de-CH "Swiss" German
de-DE Standard German (as spoken in Germany)
el-GR Modern Greek
en-AU Australian English
en-CA Canadian English
en-GB British English
en-IE Irish English
en-IN Indian English
en-NZ New Zealand English
en-US US English
en-ZA English (South Africa)
es-AR Argentine Spanish
es-CL Chilean Spanish
es-CO Colombian Spanish
es-ES Castilian Spanish (as spoken in Central-Northern Spain)
es-MX Mexican Spanish
es-US American Spanish
fi-FI Finnish (Finland)
fr-BE Belgian French
fr-CA Canadian French
fr-CH "Swiss" French
fr-FR Standard French (especially in France)
he-IL Hebrew (Israel)
hi-IN Hindi (India)
hu-HU Hungarian (Hungary)
id-ID Indonesian (Indonesia)
it-CH "Swiss" Italian
it-IT Standard Italian (as spoken in Italy)
ja-JP Japanese (Japan)
ko-KR Korean (Republic of Korea)
nl-BE Belgian Dutch
nl-NL Standard Dutch (as spoken in The Netherlands)
no-NO Norwegian (Norway)
pl-PL Polish (Poland)
pt-BR Brazilian Portuguese
pt-PT European Portuguese (as written and spoken in Portugal)
ro-RO Romanian (Romania)
ru-RU Russian (Russian Federation)
sk-SK Slovak (Slovakia)
sv-SE Swedish (Sweden)
ta-IN Indian Tamil
ta-LK Sri Lankan Tamil
th-TH Thai (Thailand)
tr-TR Turkish (Turkey)
zh-CN Mainland China, simplified characters
zh-HK Hong Kong, traditional characters
zh-TW Taiwan, traditional characters
*/
const hundereds = 1000000;
console.log(hundereds.toLocaleString());//10,00,000
console.log((hundereds.toLocaleString('zh-HK')));//1,000,000

/*
ValueOf:-The valueOf() method returns the primitive value of a number.
valueOf() is an ECMAScript1 (ES1) feature.
*/
const num = 15;
console.log(num.valueOf());//15

// MAX_VALUE:- what the maxm value we can take 
// MIN_VALUE:- what the minm value we can take
// MAX_SAFE_INTEGER:- what the maxm safe integer we can take
// MIN_SAFE_INTEGER:- what the minm safe integer we can take

/************************************************************ MATHS ***********************************************************/
console.log(Math);//so it shows that it is an object which has many properties.
/*
but you will see all the properties when you will run it in console:-
console.log(Math);
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"
[[Prototype]]: Object
*/
//now lets see some of the common maths methods:-

console.log(Math.abs(-5));//it changes into the absolute value that is it changes from +ve value to the -ve ones and the +ve value stays as uswell.
console.log(Math.round(4.3));//it normally rounds of the value.
console.log(Math.ceil(0.1)); /*ceil stands for ceiling which means the top which means if the decimal value goes little bit up i.e. .1 also it 
will round it of to the upper nearest value i.e. 1 */
console.log(Math.floor(0.9));//floor value means it will take the floor value i.e. .9 also it will round it of to the lower nearest value i.e. 0
console.log(Math.min(1,3,0,9,6));// To find which is the lowest value within the given array.
console.log(Math.max(8,5,6,7));// To find which is the highest value within the given array.

// practise all the methods of the maths libraries

//Math.random
console.log(Math.random());//this value always changes and the values always comes within 0 and 1 it can be 0 or 1 
//but sometimes you need the value more than 1 that is for dice game we need the value between 1 to 6
//so to get the value more than 1 we have to multiply it with 10 so the decimal point will shift and one of the digit get shift toward the left
console.log(Math.random()*10);//0.7745933272019807 //0.904485102866821
//but here the value can also be 0 as you can see above...... 
//so to avoid that we will add 1 to it
console.log((Math.random())*10 + 1);// but here also sometime the problem lies for the bodmas rule so to come over it.
console.log((Math.random()*10)+1);//so here there is no issue.
//to wrap these big values with the single digits we can use math.floor command
console.log(Math.floor(Math.random()*10)+1);//problem solved

//for the game of ludo
//so here is a formula to declare both min and max for that = {(max - min + 1) + min}
//here max - min is done to declare the number with in the given value and +1 is done to avoid 0 values and +min is added to get the more than the min value.
const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max - min + 1))+ min);  // very very important formula