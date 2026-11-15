//Stack (primitive) 

let myName = "Aritkumar"
let anotherName = myName // here 'anothername' variable gets the copy value of 'myName'.
anotherName = "Anikkumar"

console.log(myName);
console.log(anotherName);


//Heap (Non-Primitive)

let user1 = {
    email:"aritkumar@xyz.com",
    upiID:"aritkumar@ybl"
}

let user2 = user1 // here 'user2' varable gets the original  value (memory address) of 'user1' variable.

user2.email = "anikkumarxyz.com" //For accessing variable inside the object use '.' after varaiable .

console.log(user1);
console.log(user2);

