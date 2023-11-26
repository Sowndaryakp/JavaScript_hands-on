// 5. Write a JavaScript program that takes a number as input and checks if it is even or odd.
const prompt= require("prompt-sync")();
// let number=prompt("enter a number:");
// if(number %2 === 0){
//     console.log(number + " is an even number");
// }else{
//     console.log(number + " is an odd number");
// }

let number=Number(prompt('enter the number: '));
let cube = Math.cbrt(number);
console.log(cube);
if(cube%Math.floor(cube)===0){
    console.log("perfect");
}else{
    console.log("not");
}