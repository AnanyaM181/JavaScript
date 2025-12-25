const accountId = 771831 // There is only one way to write the constant keyword, and that is by using const

//For variables we use const and var
let accountEmail = "ananya@google.com" //let is recommended becoz the block problem is solved in this
var accountPassword = "128745"
/* Prefer not to use var because of issues with block scope ({}) and function scope.
Example: If a programmer declared accountPassword and later someone else in the same file
declared accountPassword inside a condition, then it used to get replaced.
It has not been completely removed, but it is still used in some old code. */

accountCity = "Bhubaneswarr" 
// In JavaScript, we can write variables without using var or let, but it is not a good practice.

let accountState; 
/* If we do not know the value of a variable and only declare it, then JavaScript considers its value as undefined.
*/
//In JavaScript, semicolons are not compulsory; we can omit them.


// accountId = 2 // not allowed if already one account is existing because we used (const) keyword there

accountEmail = "an@ananya.com"
accountPassword = "76874479"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// Don't need to use console.log again and again for accesing the values we can use console.log([]) , square 
// We can write everything inside the bracket