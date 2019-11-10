//   q4  Write a program to validate email address with following evaluation
// a. This string must contain @
// b. Ths string must contact chars
// c. The @ must have at least 1 char in front
// d. The string must contain .(dot) after @ and at least 1 char.
        
var email = prompt("Please Enter your Email");
var emailCondition = /\S+@\S+\.\S+/;

var emailVerify;

if (email.match(emailCondition)) {
    emailVerify = true;
} else {
    emailVerify = false;
}

if (emailVerify === true) {
    document.write("Your E-mail Is Valid");
} else if (emailVerify === false) {
    document.write("Please Enter A Valid E-mail");
}
