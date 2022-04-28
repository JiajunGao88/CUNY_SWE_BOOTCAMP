// // anonymous function
// var x = function() {
//   var a, b, result;
//   a = 5;
//   b = 8;
//   if (a > b) {
//     console.log(`a is greater than b`);
//   } else {
//     console.log(`b is greater than a`);
//   }
// }
// x();
// // scooping in js
// const fullMoon = true;
// // initialize a global variable
// let species = "human";
//
// if (fullMoon) {
//   // initialize a block-local variable
//   let species = "werewolf";
//   console.log(`It is a full moon. Lupin is currently a ${species}`);
// }
//
// console.log(`It is not a full moon. Lupin is currently a ${species}`);
//
// // Let variable
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// // console.log(`The last number is ${i}`);
// // "use strict"
// "use strict";
// name = "Peter Pan";
// // single access
// var pArray = document.getElementsByTagName('p');
// // pArray.style.color = 'green';
// // mutiple access to array pArray by using a for loop
// /*
// for (var i = 0; i < pArray.length; i++) {
//   pArray[i].style.color = 'yellow';
// }
// */
// // get element by id
// // document.getElementById('one').style.color = 'blue';
// var pOne = document.getElementById('one');
// pOne.style.color = 'blue';
// // document.querySelector() ==> select the first element that matches the condition in between the parenthesis
// var animal = document.querySelector('#species p');
// // query select all
// var animal2 = document.querySelectorAll('#species p');
// var hour = 22; // 2am
// var greeting;
// if (hour > 18) {
//   greeting = "Good evening";
// } else if (hour > 12) {
//   greeting = "Good afternoon";
// } else if (hour > 0) {
//   greeting = "Good morning";
// } else {
//   greeting = "Wrong hour";
// }
//
// // property .write always display the text content at the end of the html
// document.write(`<h2> ${greeting} </h2>`);
// // example 2
var price, quantity, subtotal, total, tax;
price = 5;
quantity = prompt("Enter quantity: ");
subtotal = price*quantity;
tax = 0.08;
total = (subtotal*tax) + subtotal;
var costElem = document.getElementById('cost');
if (quantity > 20) {
  costElem.textContent = `OUT OF STOCK. We don't have ${quantity} tiles on stock`;
} else if (quantity < 1) {
  costElem.textContent = `${quantity} is invalid`;
} else {
  costElem.textContent = `Quantity = ${quantity} \n Subtotal $${subtotal} \n Shipping $8.99 \n ------------ TOTAL $${total}`;
}
