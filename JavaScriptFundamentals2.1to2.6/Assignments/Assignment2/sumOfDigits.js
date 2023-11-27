// Write a program to find the Sum of the digits of a given number.
const prompt=require("prompt-sync")();
// function sumOfDigits(number) {
//     let numString = number.toString();
//     let sum = 0;
//    for (let i = 0; i < numString.length; i++) {
//       sum += parseInt(numString[i]);
//     }
//     return sum;
//   }
//   let inputNumber = 12345;
//   let result = sumOfDigits(inputNumber);
//   console.log("Sum of digits of " + inputNumber + ": " + result);

let number = parseInt(prompt("enter a number: "));
if(!isNaN(number)){
  let sum = 0;
  while(number!==0){
    let digit = number%10;
    sum+=digit;
    number=Math.floor(number/10);
  }
  console.log("Sum of digits: "+sum);
}else{
  console.log("Invalid Input");
}