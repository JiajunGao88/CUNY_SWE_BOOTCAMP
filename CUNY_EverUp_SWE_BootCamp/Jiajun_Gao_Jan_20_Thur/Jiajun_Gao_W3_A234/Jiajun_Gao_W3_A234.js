var colors = ['red', 'green', 'blue'];
var colorPick = colors[2];
var cSpan = document.getElementById('sColor');
cSpan.style.backgroundColor = colorPick;
// Example 5 - Activity 3
var g1, g2, avg;
g1 = parseInt(prompt("Enter the first grade: "));
g2 = parseInt(prompt("Enter the second grade: "));
avg = (g1 + g2) / 2;

var d = document.querySelector('#result');
// if avg is greater than or equal 60
if (60 <= avg && avg <= 100) {
  d.textContent = `You avg score is ${avg}. YOU PASSED!`
  // display the message using innerHTML in id="result". The message should say "YOU PASSED!"
} else if (0 <= avg && avg <= 59) { // else if the avg is between 0 and 60
  d.textContent = `You avg score is ${avg}. YOU FAILED!`
  // display the message using innerHTML in id="result". The message should say "YOU FAILED!"
} else {
  d.textContent = `You avg score is ${avg}. INVALID ENTRY!`
  // display the message using innerHTML in id="result". The message should say "INVALID ENTRY!"
}
// Example 6 - Activity 2
var Lshop = document.querySelectorAll('li.foodList');
var checkL = Lshop.length;
for (var i = 2; i < checkL; i++) {
  Lshop[i].style.backgroundColor = 'purple';
  Lshop[i].style.color = 'pink';
  Lshop[i].style.fontSize = '1.2em';
}

// Example 7
// step 1: Create the element using createElement()
var myPara = document.createElement('p');
// step 2: Give it content using createTextNode()
var mySentence = document.createTextNode('New Paragraph: Jiajun Gao');
// step 3a: append the content into the created element using appendChild()
myPara.appendChild(mySentence);
// step 3b: find the element that you want to append the new getElement
document.querySelector('.example7').appendChild(myPara);

// Activity 4

var myLi = document.createElement('li');
var myFruit = document.createTextNode('APPLE');
myLi.appendChild(myFruit);
document.querySelector('.shopping').appendChild(myFruit);
myFruit.className = 'foodL';
// Example 8
// var btn = document.querySelector('.button1');
// btn.onclick = function(){alert('Hey There!');}
// // apply addEventListener to example 8
// var btn1 = document.querySelector('.button2');
// btn1.addEventListener('click', function(){
//   alert('Hey addEventListener!');});
