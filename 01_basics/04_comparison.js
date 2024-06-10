console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 <= 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true
// here the basic and simple comparisons as compared  to the other ones and have no confussion in it
// so there is no problem in these type of conversions as we are comparing the values of same datatypes
// But the main problem lies when we are not comparing the same datatypes , but when we compare different datatypes 

console.log("2">1); //true
console.log("02">1); //true
/*here both the values came true as the string datatype is converted into the number and 2 $ 02 
is always greater than that of 1 */
// sometime these types of comparision doesn't give the user predictable results
/* So whenever you compare the values always have a check wheather all the values are of same datatypes
or not, it should be of same data type */
/* TYPESCRIPT doesn't allow 2 different datatypes should be compared but the JS does. Typescript just give
you some strict rules to fllow and write a clean and readable code,
whereas if you just follow the strict rules and write a readable and a clean code there is no need to jumpp to typescript */

console.log(null>0); //false
console.log(null==0); //false
console.log(null<0); //false
console.log(null>=0); //true
console.log(null<=0); //true
/* so here the value conversion problem arises that means you dont get the predictable results here.
The reason is that in JS an equality check '==' '==='and comparisions > < >= <= works differently.
Comparisons convert the null to a number, trating it as 0 thats why null >= 0 is true and null < 0 is false.*/

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false
console.log(undefined<=0);//false
console.log(undefined>=0);//false

/*Strict Check = '==='
which means it checks strictly that is it doesn't converts the datatypes while checking */
console.log("2"===2); //false
console.log("2"==="2"); //true
//it means that it checks the datatypes without any data coversion and it checks the datatype values strictly.

/*
NOTE:- So these type of conversions are very complecated and can put the user in confussion . so to avoid writing this 
type of code & always maintain a clean code.
*/
