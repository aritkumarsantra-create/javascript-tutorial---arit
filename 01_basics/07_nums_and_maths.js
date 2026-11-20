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

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) 
//It puts commas in the number according to the US locale,'en-IN' here it is Indian locale, so it will put commas after 3 digits and then after every 2 digits.

Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
//here number is the datatype and putting . after Number gives us access to the properties of the Number object.


//------------------MATHS-----------------------

console.log(Math)

//Object [Math] {} it means Math is an object and it has many properties and methods.

console.log(Math.abs(-4)) 
console.log(Math.round(4.7))
console.log(Math.ceil(4.5))
console.log(Math.floor(5.7))
console.log(Math.min(2,6,7,7,86,5,))
console.log(Math.max(2,6,7,7,86,5,))

//-----------Parctical use ------------------

console.log(Math.random()) // it will give us a random number between 0 and 1
console