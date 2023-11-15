// 2. Write a JavaScript program that simulates a simple calculator. 
// The program should take two numbers as input and an operator (+, -, *, or /), 
// and then perform the corresponding operation on the numbers.
const prompt= require("prompt-sync")();
// let num1 = prompt('Enter number 1: ');
// let num2 = prompt('Enter number 2: ');
// let operator = prompt('Enter operators +, -, *, /');

// if(isNaN(num1) || isNaN(num2)){
//     console.log("please enter valid numbers");
//     process.exit();
// }
// switch(operator){
//     // case "+": console.log("Result: "+(+num1 + +num2));
//     case "+": console.log(`result : ${num1 + num2}`);
//         break;
//     case "-": console.log("Result: "+(num1 - num2));
//         break;
//     case "*": console.log("Result: "+(num1 * num2));
//         break;
//     case "/":
//         //  console.log("Result:"+(num1/num2));
//         // break;   
//         if(num2 !== 0){
//             console.log("Result: "+(num1/num2));
//         }else{
//             console.log("Cannot divide by zero.");
//         }
//         break;
//     default:
//         console.log("Invalid operator, Please use +, -, *, or /.");
// }

//its not possible
// let num1 =prompt("enter number 1: ");
// switch(num1){
//     case num1>5:
//         console.log("greater");
//         break;
//     default:
//         console.log("lesser");
//         break;
// }

//
let num1 =prompt("enter number 1: ");
if(num1>5){
    console.log("greater");
}else{
    console.log("lesser");
}
        
        