const name = "Aritkumar"
const repoCount = 25

//console.log(name + repoCount + "Value"); old way to concatenate the sting with variables.

console.log(`My name is ${name} and my repository count is ${repoCount} .`);
//this is the modern way to concatenate

const gamename = new String('arit-fc')

console.log(gamename[0]);
console.log(gamename.__proto__)

console.log(gamename.length); //tells the length of string 
console.log(gamename.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.

console.log(gamename.charAt(3));
console.log(gamename.indexOf('t'));


const newWord = gamename.substring(0,5) //here substring function will ignore the negative indexing and it will start the indexing from 0. 
console.log(newWord);

console.log(gamename.slice(-6,3)); //here slicing can be done with negative indexing


const word = "   Arit   "
console.log(word);
console.log(word.trim()); //Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://aritkumar%10.com"
console.log(url.replace("%10","-")); //Replaces text in a string, using a regular expression or search string.







