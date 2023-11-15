// ASSIGNMENT 01
// 1. Write a JavaScript program that calculates the area of a rectangle. 
// The program should take the length and width of the rectangle as input, and 
// then output the area of the rectangle.
let area;
let length =parseFloat(prompt('enter the length'));
let width=parseFloat(prompt('enter the width'));
area=+length +  +width;
alert(area);

// 2. Write a JavaScript program that simulates a simple calculator. 
// The program should take two numbers as input and an operator (+, -, *, or /), 
// and then perform the corresponding operation on the numbers.
let num1 = parseFloat(prompt('enter number 1'));
let num2 = parseFloat(prompt('enter number 2'));
let operator = prompt('enter operators +, -, *, /');

if(isNaN(num1) || isNaN(num2)){
    alert("please enter valid numbers");
}else{
    switch(operator){
        case "+": alert("result: "+(+num1 + +num2));
            break;
        case "-": alert("result: "+(num1 - num2));
            break;
        case "*": alert("result: "+(num1 * num2));
            break;
        case "/":
            //  alert("Result:"+(num1/num2));
            // break;   
            if(num2 !== 0){
                alert("result: "+(num1/num2));
            }else{
                alert("Cannot divide by zero.");
            }
            break;
        default:
            alert("Invalid operator, Please use +, -, *, or /.");
    }
}

// 3. Write a JavaScript program that takes two numbers as input and prints their sum, 
// Differenceerence, productuct, and quotientient. Use Differenceerent primitive data types 
// (number, string, boolean) to store the results.
var number1=prompt("Enter the first number:");
var number2=prompt("Enter the second number:");

if(isNaN(number1)||isNaN(number2)){
    console.log("Enetr valid numbers");
}else{
    let sum = +number1 + +number2;
    let Difference = number1 - number2;
    let product = number1 * number2;
    let quotient = number1 / number2;
    
    console.log("Sum: "+ sum + "type: "+typeof sum + ")");
    console.log("Dif: "+ Difference + "type: "+typeof Difference + ")");
    console.log("product: "+ product + "type: "+typeof product + ")");
    console.log("quotient: "+ quotient + "type: "+typeof quotient + ")");
}

// 4. Write a JavaScript program that takes a string as input and checks if it is a palindrome
//  (a word or phrase that reads the same backward as forward).
let input=prompt("Enter a string:");

// 5. Write a JavaScript program that takes a number as input and checks if it is even or odd.
let number=prompt("enter a number:");
if(number %2 === 0){
    alert(number + " is an even number");
}else{
    alert(number + " is an odd number");
}

// //6. Write a JavaScript program that takes a string as input and converts it to uppercase.
let inputStringUp=prompt("enter an input string");
alert(inputStringUp.toUpperCase());

//7.Write a JavaScript program that takes a string as input and removes all vowels from the 
// string.
let inputString =prompt("enter a input string");
alert(inputString.replace(/[aeiou]/gi,""));

// ASSIGNMENT 02
