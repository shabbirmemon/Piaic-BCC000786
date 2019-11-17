// Q8 Write a function that take birth date and returns Age in years, months
// and days

function getAge(dateString,dateType) {
    
      var now = new Date();
      var today = new Date(now.getYear(),now.getMonth(),now.getDate());
  
      var yearNow = now.getYear();
      var monthNow = now.getMonth();
      var dateNow = now.getDate();
       
       if (dateType == 1)
          var dob = new Date(dateString.substring(6,10),
                              dateString.substring(3,5)-1,
                              dateString.substring(0,2));
      else if (dateType == 2)
          var dob = new Date(dateString.substring(6,8),
                              dateString.substring(3,5)-1,
                              dateString.substring(0,2));
      else
          return '';
  
      var yearDob = dob.getYear();
      var monthDob = dob.getMonth();
      var dateDob = dob.getDate();
  
      yearAge = yearNow - yearDob;
  
      if (monthNow >= monthDob)
          var monthAge = monthNow - monthDob;
      else {
          yearAge--;
          var monthAge = 12 + monthNow -monthDob;
      }
  
      if (dateNow >= dateDob)
          var dateAge = dateNow - dateDob;
      else {
          monthAge--;
          var dateAge = 31 + dateNow - dateDob;
  
          if (monthAge < 0) {
              monthAge = 11;
              yearAge--;
          }
      }
  
      return yearAge + ' years ' + monthAge + ' months ' + dateAge + ' days';
  }
  

  
  document.write(("CalculateAge('Sept 01, 1979') ")+getAge("01/09/1979",1)+'<BR>');
  
  document.write(("CalculateAge('Aug 09, 1986') ")+getAge("09/08/86",2)+'<BR>');
  