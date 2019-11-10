// 6. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

 

var randomNum = Math.random();
var endVal = (randomNum * 6) + 1;
var result = Math.floor(endVal);

document.write("Random Dice Value is : " + result +"<br>");
 
