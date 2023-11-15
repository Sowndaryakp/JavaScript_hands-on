// 3. Write a JavaScript program that takes two numbers as input and prints their sum, 
// Differenceerence, productuct, and quotientient. Use Differenceerent primitive data types 
// (number, string, boolean) to store the results.
var number1=prompt("Enter the first number:");
var number2=prompt("Enter the second number:");

if(isNaN(number1)||isNaN(number2)){
    alert("Enetr valid numbers");
}else{
    let sum = +number1 + +number2;
    let Difference = number1 - number2;
    let product = number1 * number2;
    let quotient = number1 / number2;
    
    alert("Sum: "+ sum + " type: "+typeof sum + " ");
    alert("Dif: "+ Difference + " type: "+typeof Difference + " ");
    alert("product: "+ product + " type: "+typeof product + " ");
    alert("quotient: "+ quotient + " type: "+typeof quotient + " ");
}