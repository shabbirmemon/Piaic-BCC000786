/ Q 13. Write a program that determines the minutes since midnight, Jan
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object

         var d = new Date();

        document.write("Cuttent Date is " + d + "<br>");
        document.write("Elapsed Milliseconds since January 1, 1970 : " + d.getTime() + "<br>");

        document.write("Elapsed Minutes since January 1, 1970 : " + (d.getTime() / 60 / 60 / 60))
