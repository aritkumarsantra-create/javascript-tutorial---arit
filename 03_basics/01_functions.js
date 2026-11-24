function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("K");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("R");   
} //syntax of function

sayMyName()

function Add(number1,number2){
    console.log(number1+number2);  
}

Add(1,2)
Add(1,"2")
Add("1","2")
Add("1",2)
Add("a",2)

function Add2(number1,number2){
    let result = number1+number2 //storing parameters in variable
    return result 
}//after return no code will be executed 

const result = Add2(3,4) //here we have stored the function in variable
console.log("Result : ",result);

function loginUsermessage(username){ //() here it is parameters
    if(username===undefined){
        console.log("Please Enter Username ! ");
        return //here we are checking if user giving and empty argument or not 
    }
    return `${username} just logged in !`
}
    // if(!username){<----------here it is equivalent to (username===undefined)
    //     console.log("Please Enter Username ! ");
    //     return //here we are checking if user giving and empty argument or not 
    // }
    // return `${username} just logged in !`



console.log(loginUsermessage("Arit"));//() here it is arguments
// console.log(loginUsermessage());


/*
if you want that you never want to get introduced with exception like if user
will never enters a argument then you can simply put function 'loginUsermessage(username="sam")' so that 
when user will not enter any argument then it will show 'sam just logged in' and 
if user gives any argument then it will override with 'sam'
*/

console.log("--------------------------------------------------------------------------------------");


function calculatedCartprice(val1,val2,...num1){//here we have used spread operator to store n number of arguments in array
    return num1
}

console.log(calculatedCartprice(2,30,400,150,45))
//here val1 and val2 are storing the intial arguments and remaining are storing in array 

const user = {
    username : "arit123",
    rollno : 25
}

function storeobject(anyobject){
    console.log(`Username is ${anyobject.username} and roll number is ${anyobject.rollno}`);
}

//storeobject(user)

storeobject({
    username : "arit@xyz"
    ,rollno:"25ml25"
})

const myArr = [200,300,400,500]

function storeArr(anyArray){
    return anyArray[0] //dont type myArr its generic it can be any name instead only type parameter name 
}

console.log(storeArr(myArr));
console.log(storeArr([200,300,400]));
