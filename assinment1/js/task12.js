// Q12 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 155 Pakistani Rupee and 1 Saudi Riyal = 41 Pakistani Rupee)

var us$ = 104.80;
var riyal = 28;
var pkr = (10 * us$) + (25 * riyal);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total currency in PKR: " + pkr);
