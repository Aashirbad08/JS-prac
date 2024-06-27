// Dates

/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects 
encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 
1970, UTC (the epoch).
Note: TC39 is working on Temporal, a new Date/Time API. Read more about it on the Igalia blog. It is not yet 
ready for production use!
*/

let mydate = new Date();
console.log(mydate); //2024-06-27T07:06:40.904Z so here the output comes in a diferent which is very difficult to read.
//We can use various methods to convert this date into more readable value.
//some of the examples are:-
console.log(mydate.toString());//Thu Jun 27 2024 12:43:44 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString()); //27/6/2024, 12:45:11 pm
console.log(mydate.toLocaleDateString()); //27/6/2024
console.log(mydate.toLocaleTimeString()); //12:50:15 pm
console.log(mydate.toDateString()); //Thu Jun 27 2024
console.log(mydate.toTimeString()); //12:50:15 GMT+0530 (India Standard Time)
console.log(mydate.toISOString()); //2024-06-27T07:19:35.037Z
console.log(mydate.toJSON()); //2024-06-27T07:20:15.278Z
//try more of the methods  and the methods which are tried above are the major importants methods.

console.log(typeof mydate); //object - it means that date is object in js

//Now to declare a specific date
let mycreateddate = new Date(2024,0,24); //(yyyy/mm/dd)
console.log(mycreateddate.toDateString()); //Wed Jan 24 2024 
let mynewcreateddate = new Date(2024,11,24);
console.log(mynewcreateddate.toDateString()); //Tue Dec 24 2024
//So from both of the above examples you can know that the month in js starts from 0 and ends at 11 as it is an array
let mylatestcreateddate = new Date(2024,12,24);
console.log(mylatestcreateddate.toDateString()); //Fri Jan 24 2025
//if you will give 12 month then it will jump to the next year.

//Now to declare a specific date and time 
let mydatetime = new Date(2024,0,24,5,30,33); //(yyyy/mm/dd,hh,mm,ss)
console.log(mydatetime.toLocaleString()); //24/1/2024, 5:30:33 am

// to declare a specific date in DD-MM-YYYY format
let myymddate = new Date("2024-01-11");
console.log(myymddate.toLocaleString());//11/1/2024, 5:30:00 am
//so from the above example you can see that tha month starts from 01 as it is in DD-MM-YYYY format that is the input is given in string
//you can give the command in different format also
let mymdydate = new Date("02-14-2024"); //MM-DD-YYYY
console.log(mymdydate.toLocaleString()); //14/2/2024, 12:00:00 am

//Timestamp
/*In JavaScript, a timestamp is a numeric representation of the current time. It is a unique identifier that marks the exact moment when an 
event occurred or when a certain action was performed. This timestamp is useful in various applications such as logging, debugging, or 
measuring time intervals.

Table of Content
Using Date.now() method
Using new Date().getTime() method
Using new Date().valueOf() method
Using +new Date() method:
Using Date.now() method
*/

let mytimestamp = Date.now();
console.log(mytimestamp); //1719510277376 - this is the millisecond value.
let newdate = new Date()

//to get the latest date time iso month fullyear day..etc.
console.log(newdate); //2024-06-27T17:56:44.558Z
console.log(newdate.getMonth()); //5 it is june as it starts from 0
console.log(newdate.getFullYear()); //2024
console.log(newdate.getDay()); //4
console.log(newdate.getMonth()+1); //6 here you can get the exact month as here 1 is added
//sometime by using these strings sometimes complex date print is doneby using string interpolation that is by using backticks ``
console.log(`here the day is ${newdate.getDay()} and the year is ${newdate.getFullYear()} `);

// here we can take the variable of mycreateddate:-
console.log(mycreateddate.getTime());//1706034600000 - here it is the timestamp of Wed Jan 24 2024 which was created earlier in this same file.
//now to convert into the seconds-
console.log(Date.now()/1000);//1719511534.592 here the problem is it comes in tne decimal value which we dont require
//so to overcome this problem we will use Math.floor() method 
console.log(Math.floor(Date.now()/1000));//1719511689

/*the date is a very interesting topic and specially there is one method hwich will be very much usefull to you that is localestring. This method
is itselt very much interesting that we defines a object within it and we can define a lot of parameters within it. */
//for example
/*for the first within the braces we give which internationalisation do we require.
here we are giving te dafault which will be written in the string forhmat then we will write the object.
Then we can declare the various properties so in vscode intelligence we can click ctrl+space then all the properties will be visible. */
console.log(newdate.toLocaleString('default',{
    weekday: "long",
}))
//Thursday
console.log(newdate.toLocaleString('default',{
    weekday: "short",
}))
//Thu
console.log(newdate.toLocaleString('default',{
    weekday: "narrow",
}))
//T
// here you can see the difference 
//so its the way to customise the desired future outputs.

//date and time is a very complex topic this will again be revised later.