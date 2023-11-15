// 3. Write a JavaScript program that takes two numbers as input and prints their sum, 
// Differenceerence, productuct, and quotientient. Use Differenceerent primitive data types 
// (number, string, boolean) to store the results.
const prompt= require("prompt-sync")();
var number1=prompt("Enter the first number:");
var number2=prompt("Enter the second number:");

if(isNaN(number1)||isNaN(number2)){
    console.log("Enetr valid numbers");
}else{
    let sum = +number1 + +number2;
    let Difference = number1 - number2;
    let product = number1 * number2;
    let quotient = number1 / number2;
    
    console.log("Sum: "+ sum + " type: "+typeof(sum) + " ");
    console.log("Dif: "+ Difference + " type: "+typeof Difference + " ");
    console.log("product: "+ product + " type: "+typeof product + " ");
    console.log("quotient: "+ quotient + " type: "+typeof quotient + " ");
}