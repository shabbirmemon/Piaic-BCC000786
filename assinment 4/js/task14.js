// Q 14. Create a Date object for the current date and time. Extract the
//  hours, reset the date object an hour ahead and finally display the
//  date object in your browser.
        
var date = new Date();
var CurrentDate = new Date();

CurrentDate.setHours(CurrentDate.getHours() -1);

document.write("Current Date " + CurrentDate +"<br>");
document.write("-1 Hour Ago it was " + date);

