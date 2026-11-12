const accountId = 24567 
let accountEmail = "arit@google.com"
var accountPassword = "1234"
accountCity = "Pune"
let accountState ;


//accountId = 24568 // This will throw an error because accountId is a constant and cannot be reassigned.

console.log(accountId);

accountEmail = "aritkumar@xyz.com"
accountPassword = "2356"
accountCity = "Mumbai"


/*
use let , dont use var because it has issue in 
block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

