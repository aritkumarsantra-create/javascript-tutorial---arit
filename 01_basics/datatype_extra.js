//Primitive Datatype 

/*
7 types : String,Number,Boolean,Null,undefined,
symbol,BigInt.
*/

const score = 100
const scoreValue = 100.2

console.log(typeof score);
console.log(typeof scoreValue);


const isLoggedIn = false 
const temp = null ;
let userEmail ;

console.log(typeof isLoggedIn);
console.log(typeof temp);
console.log(typeof userEmail);

const id = Symbol('123')
const pass = Symbol('123')

console.log(typeof id);
console.log(typeof pass);

console.log(id === pass);

const bigValue = 123445587424274238794n

console.log(typeof bigValue );

//Reference (Non primitive)
// Array , Objects ,functions 

const name = ["arit","rahul","rohan","rohit"]

console.log(typeof name);

let myObj = {
    name : "arit",age:19
}

console.log(typeof myObj );

const Myfunction = function(){
    console.log("hello i am arit ");
}

console.log(typeof Myfunction);
