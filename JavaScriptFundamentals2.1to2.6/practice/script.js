// alert("hai");
// alert("hello");

//getting error, afetr alert put semicolon
// alert("Hello")
// [1, 2].forEach(alert);

////Task Varables
// let admin, name;
// name = "John";
// admin = name;
// alert(admin);

// let nameOfOurPlanet;
// let nameOfCurrentVisitor;

////Task DataTyps
// What is the output of the script?
// let nam = "Ilya";
// alert( `hello ${1}` ); // 1
// alert( `hello ${"nam"}` ); // hello nam
// alert( `hello ${nam}` ); // hello Ilya

////alert to shows a message.
// alert("Hello Good Morning");

// // //Prompt to shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// let age = prompt("How old are you?",100);
// alert(`you age ${age} years old`);

// ////Confirm to shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// let isBoss = confirm("Are you the boss?");
// alert(isBoss);

// //// Task
// let namee = prompt("Whats your name?");
// alert(`${namee}, Welcome!`);

////Type conversion
//  //String conversion
//  let value = true;
//  alert(typeof value);

//  value = String(value);
//  alert(typeof value);

//  //Numeric Conversion
//  alert("6"/"3");//implicetely conversion

//  //explicetely converion
//  let str = "123";
//  alert(typeof str);

//  let num= Number(str);
//  alert(typeof num);

//  let age = Number("an arbitrary string instead of a number");
//  alert(age); // NaN, conversion failed

 //boolean conversion
//  alert(Boolean(1));
//  alert(Boolean(0));

//Basic operators, maths
 //operand, remainder, exponentiation
 //String concatenation with binary +
//  console.log(2+2+'1');
//  console.log('1'+2+2);
// console.log(6 - "2");//converts '2' to a number

// Numeric conversion, unary +
//no effect on numbers
// let x=1;
// console.log(+x);//1

// let y = -2;
// console.log(+y);//-2

//converts non -numbers
// console.log(+true);//1
// console.log(+ "");//0

// let apples="2";
// let oranges="3";
// console.log(apples + oranges);//23
// console.log(+apples + +oranges);//5

//assignment
// let x1 = 2*2+1;
// console.log(x1);

//increment
// let counter =2;
// counter++;
// console.log(counter);

// // decrement
// counter--;
// console.log(counter);

// ////Task postfix and prefix
// let a =1, b=1;
// let c = ++a;//2
// let d = b++;//1

// //Assignment result
// let a1= 2;
// let x = 1+(a1 *=2);// a=4, x=5

// //Type conversions
// "" + 1 + 0// 10
// "" - 1 + 0//-1
// true + false // 1
// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //NaN
// "  -9  " + 5 //-9 5
// "  -9  " - 5 //-14
// null + 1 //1
// undefined + 1 //NaN
// " \t \n" - 2 //-2

// Task
// let a =  prompt("First number?",1);
// let b = prompt("Second number?",2);
// alert(+a + +b);

//Comparisions
// let res=5>4;
// console.log(res);
// //Boolean Comparision
// alert('Z'>'A');

// //comparision of different types
// alert('2'>1);
// alert('01'>1);

// //Task
// 5 > 4 //t
// "apple" > "pineapple"//f
// "2" > "12"//t
// undefined == null//t
// undefined === null//f
// null == "\n0\n"//f
// null === +"\n0\n"//f

//Conditional branching: if, '?'
// // let result = condition ?value1: value2;
// let age = 22;
// let accessAllowed = (age>18)? true: false;
// console.log(accessAllowed);

// // let message = (age<3)?'Hi, Baby!': (age<18)? 'Hello!': (age<100)? 'Greetings!': 'what an unusual age!';
// // console.log(message);

// if(age<3){
//     message='Hi, Baby!';
// }else if(age<18){
//     message='Hello!';
// }else if(age<100){
//     message='Greetings!';
// }else{
//     message='what an unusal age!';
// }
// console.log(message);

// // let company = prompt('Which company created JavaSCript?', '');
// let company = 'Nothing';
// if(company == 'Netscape'){
//     console.log(true);
// }else{
//     console.log(false);
// }

// //Task if (a string with zero)
// if("0"){
//     console.log('Hello');
// }

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// 'use strict';
// let value = 'ECMA';
// if(value=='ECMAScript'){
//     console.log("Right");
// }else{
//     console.log(`you don't know? ECMAScript!`);
// }

// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// let value = 0;
// if(value==0){
//     console.log('0 is equals to zero!');
// }else if(value<0){
//     console.log('value is greater than zero');
// }else{
//     console.log('less than zero');
// }

// let message=(login=='Employee')? 'Hello': (login == 'Director')?'Greetings':(login=='')?'no login':'';

//Logical operators
// OR(||) operator
// let hour = 9;
// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// AND(&&) operator
// let hour=12;
// let minute=30;
// if(hour == 12 && minute== 30){
//     console.log('The time is 12:30');
// }

// NOT(!) operator
// console.log(!true);
// console.log(!0);

// //tasks
// console.log(null || 2 || undefined);
// console.log(alert(1) || 2 || alert(3));
// console.log(1&&null&&2);
// alert(alert(1)&&alert(2));
// alert(null || 2 && 3 || 4);

// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
// if(age>=14 && age <= 90)

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// if (!(age >= 14 && age <= 90))//first variant
// if (age < 14 || age > 90)//second variant

// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let userName = prompt(`Who's there?`,'');
if(userName === 'Admin'){
    let pass = prompt('Password?','');
    if(pass==='ThaMaster'){
        alert('Welcome!');
    }else if(pass === '' || pass === null){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}else if(userName === '' || userName === null){
    alert('Canceled');
}else{
    alert(`I dont't know you`);
}

// // Nullish coalescing operator '??'
// let user;
// alert(user ?? "Anonymous");

//Loops : while,do-while and for
//while syntx
/* while(condition){
    //code
}*/
// let i = 0;
// while(i<3){
//     console.log(i);
//     i++;
// }

//do-while syntax
/*do{
    //code
}while(condition);
*/
// let j=0;
// do{
//     console.log(j);
//     j++;
// }while(j<3);

//for syntax
/*for(begin; condition; step){
    //code
}*/
// for(let i=0;i<3;i++){
//     console.log(i);
// }
