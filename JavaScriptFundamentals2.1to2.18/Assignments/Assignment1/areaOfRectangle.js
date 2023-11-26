// 1. Write a JavaScript program that calculates the area of a rectangle. 
// The program should take the length and width of the rectangle as input, and 
// then output the area of the rectangle.
const prompt= require("prompt-sync")();
const length = Number(prompt("enter the length"));
const width = Number(prompt("enter the width"));
if(isNaN(length) || isNaN(width)){
    console.log("enter valid number");
    process.exit();
}
console.log(length*width);

// let area;
// let length =parseFloat(prompt('enter the length'));
// let width=parseFloat(prompt('enter the width'));
// area=length *  width;
// alert(area);