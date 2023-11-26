// Write a JavaScript program that takes three numbers as input and outputs the largest of the three numbers.
const prompt = require("prompt-sync")();
// function findLargest(num1,num2,num3){
//     let largestNumber = Math.max(num1, num2, num3);
//     return largestNumber;
// }
// let num1=14,num2=8,num3=26;

// let result = findLargest(num1,num2,num3);
// console.log(result);

//without using function method
let num1 = parseFloat(prompt("enter the first number: "));
let num2 = parseFloat(prompt("enter the second number: "));
let num3 = parseFloat(prompt("enter the third number: "));

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
  if(num1 >= num2 && num1>=num3){
    console.log(`The largest number is ${num1}`);
  }else if(num2>=num3 && num2>=num1){
    console.log(`The largest number is ${num2}`);
  }else{
    console.log(`The largest number is ${num3}`);
  }
}else{
  console.log('Please enter valid numbers');
}
