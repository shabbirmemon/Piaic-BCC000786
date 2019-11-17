// Q12 Write a JavaScript program act as number guessing game and
// give user chance to try 3 times if guess incorrect and then ask user if
// he/she wants to play game again
// a. Generate Random number between 1 to 100
// b. Ask user to guess number
// c. User will have 3 chances, if user enters incorrect number it
// should say that “Incorrect, Please try again”
// d. If user guess right on first, second or third try is should say “You
// are right, You won”
// e. Then it asks the user if he/she wants to play again, if user says
// yes, then the whole process starts from point (a) again
// f. If user says no then game end saying “Thank you for playing
// with use today”
// g. After point ( c ) if user failed 3 times then it should say “You
// Lose” and game should ask if user wants to play again, if user
// say yes then it should start from point (a) again.


function playGame(){
    i=0
    while(i<3){
    var randomNum = Math.floor((Math.random() * 99) +1);
    var guessNum = +prompt("Guess number");
    
    function incorrectNum(){
        if(guessNum !== randomNum){
            document.write("incorrect! please try again");
        }
    }
    
    function correctNum(){
        if(guessNum === randomNum){
            document.write("you are right you won")
        }
    }
    
    document.write(incorrectNum())
    document.write(correctNum())
    i++
    }
    }
    document.write(playGame())
    
    var ask = prompt("You do want to play again say yes/no");
    if(ask === "yes"){
        document.write(playGame())
    }else if(ask === "no"){
        document.write("Thanks for playing")
    }