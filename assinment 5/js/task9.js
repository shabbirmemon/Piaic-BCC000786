// Q9. Write a function to add weeks in current date

function add_weeks(dt, n) 
 {
 return new Date(dt.setDate(dt.getDate() + (n * 7)));      
 }

dt = new Date();
console.log(add_weeks(dt, 0).toString());  

dt = new Date(2019,10,13);
console.log(add_weeks(dt, 10).toString());

function getAge(dateString,dateType) {
}