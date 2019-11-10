// Q5. Write a program that takes a positive integer from user & display the
// following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

  var userInput = prompt("Please enter the number");
    var decimalInput = parseFloat(userInput);
    var roundVal = Math.round(userInput);
    var floorVal = Math.floor(userInput);
    var ceilVal = Math.ceil(userInput);


    document.write("Number : " + decimalInput);
    document.write("<br>Round off Value : " + roundVal);
    document.write("<br>Floor Value : " + floorVal);
    document.write("<br>Ceil Value : " + ceilVal + "<br>");
    
