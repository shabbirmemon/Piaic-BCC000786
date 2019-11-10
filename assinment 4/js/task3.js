// //    Q3 Write a program to take password as an input from user. The
//     password must qualify these requirements:
//     a. It should contain alphabets and numbers
//     b. It should not start with a number
//     c. It must at least 8 characters long
//     d. If the password does not meet the above requirements, prompt
//     the user to enter a valid password. For character codes of a-z,
//     A-Z & 0-9

var password = prompt("Please Enter Password");
var passwordLength = password.length;

var condition00;
var condition0;
var condition1;

condition = /^[0-9a-zA-Z]+$/;

if (password.match(condition)){
condition00 = ture;
}
else{
    condition00 = false;
}

if (password.charCodeAt(0) >=49 && password.charCodeAt(0) <=57){
    condition0 = false;
}
else{
    condition0 = true
}

if (passwordLength >= 8) {
    condition2 = true;
}
 else { condition2 = false }

if (condition00 === true && condition0 === true && condition1 === true) {
    document.write("PERFECT PASSWORD");
} else {
    }
if (condition00 === true && condition0 === true && condition1 === true) {
    document.write("PERFECT PASSWORD");
} else {
    document.write("Enter a Valid Password\n<br>With Letter & Numbers Only\n<br>Must Not Start With a Number\n<br>Longer Than 8 Chars.");
}

