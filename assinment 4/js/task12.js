//Q 12. Write a program that shows the message “First fifteen days of the month” 
//if the date is less than the 16th of the month else shows “Last
//days of the month”.
            
var d = new Date();

if(d <= 15){
    document.write("Last fifteen days of the month <br>")

}
else{
    document.write("First fifteen days of the month <br>")
}
