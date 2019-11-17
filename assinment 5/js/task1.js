// Q1 Write a function that computes the factorial of a number

function factorial(x)
{
    if (x === 0)
    {
        return 1;
    }
    return x * factorial(x-1);
}
document.write("Factorial (8) " + factorial(8)+"<br>" );


function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
}
document.write("Factorial (5) " +factorial(5) +"<br>");

function factorial(x)
{
    if (x === 0)
    {
        return 1;
    }
    return x * factorial(x-1);
}
document.write("Factorial (9) " +factorial(9)+"<br>");
