const InstaUser = new Object()//this is singleton object 
console.log(InstaUser);

const InstaUser2 = {}//this is non singleton object 
console.log(InstaUser2);

InstaUser.id = "123abc"
InstaUser.name = "Arit"
InstaUser.isLoggedIn = true 

const anotherUser = {
    email:"aritkumar@gmail.com",
    fullName : {
        userFullname : {
            firstName : "aritkumar",
            lastname : "santra"
        }
    }
}

console.log(anotherUser.fullName.userFullname.firstName);
console.log(anotherUser.fullName.userFullname);
console.log(anotherUser.fullName);
console.log(anotherUser);

const obj1 = {1:"A",2:"B",3:"C"}
const obj2 = {4:"D",5:"E",6:"F"}

const obj3 = {obj1,obj2}
console.log(obj3);//not a correct way to merge object 

const obj4 = Object.assign({},obj1,obj2)
console.log("assign merge ",obj4);
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//here {} is a target and Obj1 and obj2 is source 

const obj5 = {...obj1,...obj2}
console.log("spread operator merge",obj5 );//here ... is a spread operator 

const users = [
    {
        id :1,
        email : "a@gamil.com"
    },{
        id :1,
        email : "a@gamil.com"
    },{
        id :1,
        email : "a@gamil.com"
    },{
        id :1,
        email : "a@gamil.com"
    }
]

console.log(InstaUser);

console.log("keys of Instauser",Object.keys(InstaUser));
console.log("Values of Instauser",Object.values(InstaUser));
console.log("Entries of Instauser",Object.entries(InstaUser));

console.log(InstaUser.hasOwnProperty("isLoggedIn"));


//-----------------destructuring of objects -----------------

console.log("-----------------destructuring of objects -----------------");

const course = {
    coursename: "js in hindi ",
    price : "999",
}

console.log(course.coursename);

const {coursename: cName} = course //destructuring the object 
console.log(cName); //desrturctured object  

// {
//     "name": "Aritkumar",
//     "coursename": "js in hindi",
//     "learner": "Aritkumar"
    
// }
//this is json .
//api are usually in object .
//sometimes it is in array .