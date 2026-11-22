// Dates

let myDate = new Date()
//date is an object .

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//-----specific date declaration ----------
console.log("-----specific date declaration----------");


let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString('en-IN'));
console.log(myCreatedDate3.toLocaleString('en-IN'));

let myTimeStamp = Date.now()
//.now() ghives output in milisecond 

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));//converts in second and Math.floor() removes the decimal value . 
// Here getTime() method in JavaScript returns the number of milliseconds that have elapsed since the Unix Epoch (January 1, 1970, 00:00:00 UTC).

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
//getDay() counts from monday till current day 
//while getting the months if it is in string e.g: january is 01 otherwise if it is in number then 00 

// `${newDate.getDay()} and the time `

let format = newDate.toLocaleString('default', {
    weekday: "long",
    month: "long"
    
})
//Passing 'default' tells JavaScript to use the user's current operating system or browser language setting automatically.

console.log(format);
