// 2. Write a JavaScript program that simulates a simple calculator. 
// The program should take two numbers as input and an operator (+, -, *, or /), 
// and then perform the corresponding operation on the numbers.
let num1 = parseFloat(prompt('Enter number 1'));
let num2 = parseFloat(prompt('Enter number 2'));
let operator = prompt('Enter operators +, -, *, /');

if(isNaN(num1) || isNaN(num2)){
    alert("please enter valid numbers");
}else{
    switch(operator){
        case "+": alert("Result: "+(+num1 + +num2));
            break;
        case "-": alert("Result: "+(num1 - num2));
            break;
        case "*": alert("Result: "+(num1 * num2));
            break;
        case "/":
            //  alert("Result:"+(num1/num2));
            // break;   
            if(num2 !== 0){
                alert("Result: "+(num1/num2));
            }else{
                alert("Cannot divide by zero.");
            }
            break;
        default:
            alert("Invalid operator, Please use +, -, *, or /.");
    }
}