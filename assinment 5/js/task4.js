// Q4 The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// a. Pass the radius to the function.
// b. Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// a. Pass the radius to the function.
// b. Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


function calCir(radius){
    circum = 2*3.142*radius;
    document.write('Your Circumference '+circum+ "<br>");
}
document.write(calCir(69)+"<br>");

function calRa(radius){
    areaOfCircle = 3.142*radius*2;
    document.write("Area of cirlce", areaOfCircle+"<br>");
}
document.write(calRa(79)+"<br>");
