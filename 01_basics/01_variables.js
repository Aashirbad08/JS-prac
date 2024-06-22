const accountId = 144553
let accountEmail = "aashirbad@gmail.com"
var accountPassword = 12345
accountcity = "Jaipur"
let accountState;
// In JS if just declared the value and not assign the values to it, then JS will consider it as an undefined value.

// accountId = 2 (not allowed as in constant the value can't be changed)

console.log(accountId)
console.table([accountId,accountEmail,accountPassword, accountcity,]) /*here console.table is used to print multiple
values at the same time */

accountEmail = "ap@ap.com"  
accountPassword = "11111"
accountcity = "Bengaluru"


/*here these 3 values are changed to investigate weather all the values other the const
can be changed or not*/


/*In JS there are 2 ways to declare the variables that is let and var ,but don't use var as
because of issues in Block Scope and Functional Scope*/

/*There is another way to declare a variable just by directly assigning the variable without using any commands
like var and let but it is not recommended as it will sometime show error as well as it will show an 
unindentified line under the assigned variable*/


console.table([accountId,accountEmail,accountPassword, accountcity,accountState])
//As you can see the unidentified white line under the accountcity variable is being appeared.

//investigation successful as the values have been changed.

accountState = "Karnataka"
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
//Here all the 3 prints had been performed as there are 3 console commands as you can see above.
