// Write a JavaScript program that takes a string as input and outputs the string in reverse order.
const prompt = require("prompt-sync")();
// function reverseString(inputString){
//     let reversedString = inputString.split('').reverse().join('');
//     return reversedString;
// }
// let input = "Hai Sowndarya!";
// let result = reverseString(input);
// console.log("original" + input);
// console.log('reversed '+result);

let inputString = prompt("enter a string: ");
let reverseString="";
for(let i=inputString.length-1;i>=0;i--){
    reverseString+=inputString[i];
}
console.log("Reveresd String: "+reverseString);