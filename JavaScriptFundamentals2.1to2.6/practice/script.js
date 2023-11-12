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
let a =  prompt("First number?",1);
let b = prompt("Second number?",2);
alert(+a + +b);

//Comparisions
let res=5>4;
console.log(res);
//Boolean Comparision
alert('Z'>'A');

//comparision of different types
alert('2'>1);
alert('01'>1);

//Task
5 > 4 //t
"apple" > "pineapple"//f
"2" > "12"//t
undefined == null//t
undefined === null//f
null == "\n0\n"//f
null === +"\n0\n"//f
