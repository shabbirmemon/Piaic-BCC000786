// Q15 Write a program to ask the user about his age. Calculate and show
// his birth year in your browser


var userDate = "18"; // all this info would be taken from the user
var userMonth = "October";
var userYear = "1998";

var userDOB = (userDate + userMonth + userYear);

var dt1 = new Date();
var dt = new Date(userDOB);

var age = (dt1.getFullYear() - dt.getFullYear());
var birthYear = (dt.getFullYear());


document.write("Your Age Is: " + age + "<br>");
document.write("Your Birth Year Is: " + birthYear);
