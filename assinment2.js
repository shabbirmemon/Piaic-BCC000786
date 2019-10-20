
// Q1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights

var spec1 = prompt("What is City name?");

if (spec1 === "Karachi"){
alert("Welcome to city of lights");

} 
else{
alert("try again");
}

// Q2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 

var Gender1 = prompt ("Gender");

if (Gender1 === "Male"){
    alert("Good Morning Sir");
}
else if (Gender1 === "Female"){
    alert("Good Morning Madam")
}

// q3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var time = 5;

function functionary() {
  var red = document.getElementById('redL')
  var yellow = document.getElementById('yellowL')
  var green = document.getElementById('greenL')
  var Colours = ["#FF0000", "#FFB300", "#05FF0D", "#7A0000", "#7A5C00", "#008000"];
  if (time == 5) {
    red.style.background = Colours[0]; 
    yellow.style.background = Colours[4];
    green.style.background = Colours[5];
    time = 1;
  } else if (time == 2 || time == 4) {
    red.style.background = Colours[3];
    yellow.style.background = Colours[1];
    green.style.background = Colours[5];
  } else if (time == 3) {
    red.style.background = Colours[3];
    yellow.style.background = Colours[4];
    green.style.background = Colours[2];
  }
  time += 1;
};
setInterval(function() {
  functionary();
}, 6000);

// q4 Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = prompt("Enter remaining fuel.");
if(fuel <0.25){
    document.write("Please refill the fuel in your car <br>");

}

//Q5 Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } b. var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
//     c. var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//     d. var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
//     e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     } b. var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
//     c. var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//     d. var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
//     e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


var a = 4; if (++a === 5){
    document.write("give condition for variable a is true <br>");}
        var b = 82; if (b++ === 83){
            document.write("give condition for variable a is true <br>");}
                var c = 12;
                if (c++ === 13){
                    document.write("condition 1 is true <br>")}
                    if (c === 13){
                        document.write("condition 2 is true <br>" )}  
                if(++c <14){
                    document.write("condition 3 is true <br>") }
    if(c === 14){
        document.write("condition 4 is true <br>")   }
    var materialCost = 20000;
    var labourCost = 2000;
    var totalCost = materialCost + labourCost;
    if(totalCost === labourCost + materialCost){
        document.write("The cost equals");     }
        if(true){
            document.write("True");         }
            if(false){
                document.write("False");             }
                if("car < cat"){
                    document.write("car is smaller than cat");
                }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var marks = 65;
var marks1 = 61;
var marks2 = 68;
var totalMarks = 300;
var obtainedMarks = (marks + marks1 + marks2);
var percentage = obtainedMarks / totalMarks * 100;
percentage = Math.round(percentage);
document.write("<h1> Mark obtained<h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks +"<br>");
document.write("Percentage: "+ percentage + "%<br>");
if(percentage >= 80){
    document.write("Grade: A-One <br>Remarks: Excellent")
}
else if(percentage >= 70){
document.write("Grade: A <br> Remarks: Good")
}
else if(percentage >= 60){
    document.write("Grade: B<br>Remarks: You need to improve")
}
else{
    document.write("Grade: Fail<br>Remarks: Sorry")
};

// q7 Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct
// answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secretNumber = 4;
var guessNumber = +prompt("Guess the number");
if (guessNumber === secretNumber){
    document.write("Bingo! Correct answer")
}

else if (guessNumber === ++secretNumber){
    alert("Close engough to the Correct answer")
}

// q8 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = 9;
if (number % 3 === 0){
    document.write("This number is divisible by 3")
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var number =6;
if(number % 2 === 0){
    document.write("This is even number")
}
else{
    document.write("This is odd Number");
}

var number = 5;
if(number % 2 === 0){
    document.write("This is even number")
}
else{
    document.write("This is odd Number");
}

// q 10 rite a program that takes temperature as input and shows a message based on following criteria

var temperature = prompt("Enter Temperature");
if(temperature > 40){
    alert("It is too hot outside.")
    }
else if(temperature > 30){
    alert("The Weather today is Normal.")
    }
else if (temperature > 20){
    alert("Today's Weather is cool.")
}
else{
    alert("OMG! Today's weather is so Cool.")
}

// Q11 Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input: 
// a. First number     b. Second number    c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second number");
var operation = prompt("Enter Calclate result to user");

if(operation == "+"){
    alert("Total sum " + firstNumber+secondNumber)
}
else if(operation === "-"){
    alert("Total sub " + firstNumber-secondNumber)
}
else if(operation === "*"){
    document.write("Total Multiply " + firstNumber*secondNumber)
}

else if(operation === "/"){
    document.write("Total divide " + firstNumber/secondNumber)
}
else if(operation === "%"){
    document.write("Total personage " + firstNumber%secondNumber)
}