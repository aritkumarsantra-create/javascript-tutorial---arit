const myArr = [1,2,3,4,5,6,7]
let date = new Date()
const myArr2 = [2,5,7,8,"Arit",date.toLocaleString('default')]
console.log(myArr[0]);
console.log(myArr2);

//JavaScript arrays are resizable and can contain a mix of different data types.
//Array is non-primitve

const myArr3 = new Array(23,4,5,78,8,7)
console.log(myArr3);

const myArr4 = new Array("Arit","anik","Rahul","rohit")
console.log(myArr4);

//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

//Array Methods .

myArr.push(8)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);
//Inserts new elements at the start of an array, and returns the new length of the array.

myArr.shift()
console.log(myArr);
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr.includes(9));
//we can question to the array that is this element is present or not and it gives answer in true and false .
//'includes' Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArr.indexOf(9));
console.log(myArr.indexOf(2));

/*
The value to locate in the array.
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
*/

//---------Converting array into string------------------

console.log("---------Converting array into string------------------");

const newArr = myArr.join()
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);
console.log("type of newArr : ",typeof newArr);

// slice , splice
console.log("A",myArr);
const myN1 = myArr.slice(0,3)
// slice(start, end) -> Returns a copy up to 'end' (exclusive); original array stays unchanged.
console.log(myN1);
console.log("B",myArr);


const myN2 = myArr.splice(0,3)
// splice(start, deleteCount) -> Removes 'deleteCount' items and returns them; mutates original array.
//it counts from 0 and deletes 3 elemnents from 0 
console.log(myN2)
console.log("C",myArr);

