// Numbers and Math in JavaScript
const score = 400
console.log(score) 


const balance = new Number(100)
console.log(balance)
 /* here we are creating a Number object, 
what is Number object ? here it is guaranteed to be a number, but it is an object, not a primitive value. */

console.log(typeof balance) // object

console.log(balance.toString().length) 
console.log(balance.toFixed(5)) 

const Value = 1100.123456789
console.log(Value.toPrecision(3)) 