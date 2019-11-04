// Q14 What will be the output in variables a, b & result after execution of the following script: 

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// // Explain the output at each stage: 
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2;
var b = 1;

var a = --a - --b;
var b = --b - --b + ++b;
var ab = --a - --b + ++b +b--;
document.write("a is " +a +"<br>");
document.write("b is " +b +"<br>");
document.write("result is " +ab +"<br>");
