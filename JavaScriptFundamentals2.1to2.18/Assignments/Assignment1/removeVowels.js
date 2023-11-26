//7.Write a JavaScript program that takes a string as input and removes all vowels from the 
// string.
const prompt= require("prompt-sync")();
let inputString =prompt("enter a input string");
console.log(inputString.replace(/[aeiou]/gi,"x"));