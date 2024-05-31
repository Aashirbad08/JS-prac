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
