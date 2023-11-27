// Write a function that takes two numbers as input and returns the sum of the two numbers as a string.
const prompt=require('prompt-sync')();
// function sumToString(num1, num2){
//     let sum = num1 + num2;
//     let sumString= sum.toString();
//     return sumString;
// }
// let result= sumToString(10,15);
// console.log(result); 

//without using function method
let num1=Number(prompt("enter number1: "));
let num2=Number(prompt("enter number2: "));
let result = num1 + num2;
let sumString = result.toString();
console.log(sumString);