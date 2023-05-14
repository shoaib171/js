/** @format */

console.log("Hello this is javascript revise with concepts tutorials ");
// variables...
// function example() {
//   var x = 10;
//   let y = 100;
//   if (true) {
//     var x = 20;
//     let y = 30;
//     console.log(x, y, "First"); //(20,30)..
//   }
//   console.log(x, y, "Second"); //(20,100)
// }
// example(); //For this example we consider "let" is block scope element and "var" is global scope element

//Alert Prompt Confirm
// alert("Hello this is message for learning javascript");
// let operand_1 = parseFloat(prompt("Enter number_1:"));
// let operand_2 = parseFloat(prompt("Enter number_2:"));
// let Total = operand_1 + operand_2;
// // alert(`sum is  ${Total}`);
// console.log(`sum of operand_1  and operand_2 is : ${Total} `);

//write an code to take inputs as a numbers like 1,2,3,4,5 and show the output in reverse 5,4,3,2,1
//First--way
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr, "Array");
//2nd-way mostly ask during interview
// let numbers = [];
// while (true) {
//   let input = prompt("Enter number and 'Done' to finish ");
//   if (input === "Done") {
//     break;
//   }
//   numbers.push(Number(input));
// }
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

//confirm
// let IsBoss = confirm("Are you Boss");
// if (IsBoss === true) {
//   alert("Yes am Boss");
// } else {
//   alert("sorry am your Father");
// }

//Logical Operators
// a = 1;
// b = 2;
// c = 3;

// if (a < b && b > c) {
//   alert("True");
// } else {
//   alert("False");
// }

//Calculator in javascript
//1-Take operators as input
// const operator = prompt("Enter operator (Either +,-,/,*)");
// //2-take numeric values to perform calculations
// const opr_1 = parseFloat(prompt("Enter number_1"));
// const opr_2 = parseFloat(prompt("Enter number_2"));
// let result;
// if (operator == "+") {
//   result = opr_1 + opr_2;
// } else if (operator == "-") {
//   result = opr_1 - opr_2;
// } else if (operator == "/") {
//   result = opr_1 / opr_2;
// } else {
//   result = opr_1 * opr_2;
// }
// //Display the results
// console.log(`${opr_1} ${operator} ${opr_2}= ${result}`);

//switch case:
// const operator = prompt("Enter operator (Either +,-,/,*)");
// const opr_1 = parseFloat(prompt("Enter number_1"));
// const opr_2 = parseFloat(prompt("Enter number_2"));
// switch (operator) {
//   case "+":
//     result = opr_1 + opr_2;
//     console.log(`${opr_1} ${operator} ${opr_2}= ${result}`);
//     break;
//   case "-":
//     result = opr_1 - opr_2;
//     console.log(`${opr_1} ${operator} ${opr_2}= ${result}`);
//     break;
//   case "/":
//     result = opr_1 / opr_2;
//     console.log(`${opr_1} ${operator} ${opr_2}= ${result}`);
//     break;
//   case "*":
//     result = opr_1 * opr_2;
//     console.log(`${opr_1} ${operator} ${opr_2}= ${result}`);
//     break;
//   default:
//     console.log("invalid operator");
//     break;
// }

// Functions..
//local variable  ..also know let is an block element
// function show_Message() {
//   let username = "shoaib Rasheed";
//   alert(username);
// }
// show_Message();
// console.log(username);//reference error show not defined username
//outer variable Global variable
// let name = "shoaib-Rasheed";
// function show_Name() {
//   let Full = `Hello ${name}`;
//   alert(Full);
// }
// show_Name();

//parameters values
// function message(Text, name = "No given Text") {
//   let Message_Text = `${Text}: ${name}`;
//   console.log(Message_Text);
// }
// message("Hello", "shoaib-rasheed"); //result Hello:shoaib-rasheed
// // message("Hello");//result Hello:show in place of name undefined
// message("Hello");//result Hello :"SHow default message not given text"

//Function value and copy function
// let name = function () {
//   console.log("Hello this is me ");
// };
// name(); //Hello this is me
// let Name = name;//copy the functions and shows the same value of that function which you have copied
// Name();

//callback Function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// function showOk() {
//   alert("Yes Agree to join this channel");
// }
// function showCancel() {
//   alert("No i did't agree to join this channel");
// }
// ask("Do you agree to join this", showOk, showCancel);//Best Example for callBack

// setTimeout(function () {
//   console.log("This message will be logged after 2 seconds");
// }, 2000);
// What is callBack..?

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );//shorter Function

// function Add(a, b) {
//   return a + b;
// }
// let result = Add(3, 3);
// console.log(result);

// Special javascript

// alert("Hello");
// [1, 2].forEach(alert);
// console.log("Hello hey");
// [1, 2].forEach(console.log);

//Settimeout setTime_Interval

// setTimeout(() => {
//   console.log("Hello this is javascript setTimeOut Function");
// }, 2000);
// console.log("Hello shybi"); //its execuet First then execute settimeout

// setInterval(() => {
//   console.log("This is setTimeinterval function");
// }, 2000);

let Time = new Date();
console.log(Time);

//ASYNC AWAIT
// async function fULL() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done the resolve function!"), 2000);
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   alert(result); // "done!"
// }

// fULL();

// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();
