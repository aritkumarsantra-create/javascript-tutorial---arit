 //obejcts can be defined in two ways 
 //objects literals : in which singleton isn't present 
 //constructor :  in which singleton is present.
 //object can be accessed via key .
 //constructor mehthod 
 Object.create //singleton is present .

 const mySym = Symbol("key1")

 //object literals  //singleton is not present .
 const Users = { 
    name:"Aritkumar",
    //"Time":"2:34pm"
    [mySym] : "myKey1",
    "Full Name":"Aritkumar Santra",
    Age:19,
    location:"Pune",
    email:"aritkumar@xyz.com",
    isLoggedIn:true,
    lastLoggeIn:["Monday","Tuesday"]
 } 
 console.log(Users.lastLoggeIn);
 console.log(Users["lastLoggeIn"]);//Behind the scenes, JavaScript stores all object keys as strings.to acces use []
 console.log(Users["Full Name"]);//Read important note
 console.log(Users[mySym]);//to access symbol use []
 console.log(Users[mySym]);
 
 
 /*important note : Why Users.Time Works
"Time" is a single word with no spaces or special characters. Because it follows valid JavaScript variable naming rules, JavaScript allows you to access it with a dot:
 
 * Object Property Access: Dot (.) vs Bracket ([]) Notation
 *
 * - Behind the scenes, JavaScript stores all object keys as strings.
 * - Dot Notation (Users.Time):
 *   Works ONLY if the key is a valid JS identifier (no spaces, hyphens, or leading numbers).
 * - Bracket Notation (Users["Full Name"]):
 *   Required whenever a key contains spaces/special characters, starts with a number,
 *   or when accessing a key dynamically via a variable (Users[key]).
 */

Users.email= "aritkumar@flash.co"
console.log(Users);

//Object.freeze(Users); //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

Users.email="aritkumar@amazon.in"
console.log(Users);

Users.greetings = function(){
   console.log("hello User");
   
}

console.log(Users.greetings());

Users.greetings2 = function(){
   console.log(`hello User,${this["Full Name"]}`);
   
}
//'this.' or 'this[]' is use for object reference 
console.log(Users.greetings2());
