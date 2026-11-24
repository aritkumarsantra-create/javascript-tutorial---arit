const marvel_name = ["thor","iron man","spiderman"]
const dc_name = ["superman","batman","cyborg","joker"]

//marvel_name.push(dc_name)
//console.log(marvel_name);
//console.log(marvel_name[3][0]);

/*lengthy way to concatenate array and
 not a correct way its like 'arr[arr[]]'*/

//----------------------------------------------------

const all_heroes = marvel_name.concat(dc_name)
console.log(all_heroes);
//bettter way to merge array but still lengthy to concatenate more than two array

const new_all_heroes = [...marvel_name, ...dc_name]//here ... is a spread operator 

console.log(new_all_heroes);
//best way to merge array ,less complex to merge more than two array .

const myArr = [1,2,3,4,[5,6,7],8,9,10,[11,12,13,[14,15,16,[17,18,19,[20]]],21],22]
const properArr = myArr.flat(Infinity);
console.log(properArr);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Arit"));//tells us whether it is array or not
console.log(Array.from("Arit"));//converts in array
console.log(Array.from({name:"Arit"}));//here it will not convert this type of object 

let value1 = 100
let value2 = 200
let value3 = 300

console.log(Array.of(value1,value2,value3));
