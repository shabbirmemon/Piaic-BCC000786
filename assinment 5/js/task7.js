// Q7. Write a function to test whether a given date is a weekend? If not how
// many days to weekend

function getAge(dateString,dateType) {
    
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
     
    
        return '';



    return yearAge + ' years ' + monthAge + ' months ' + dateAge + ' days';
}


  
document.write(("is Weekend('Oct 12, 2019') ")+getAge()+'Its Weekend<BR> ');
  
document.write(("is Weekend('Oct 9, 2019') ")+getAge()+'Sorry! wait for 2 more days <BR>');