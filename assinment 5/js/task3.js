// Q3 Write a JavaScript function that checks whether a passed string is a
// palindrome or not? A palindrome is the word, phrase, or sequence
// that reads the same backward as forward, e.g., madam, Tibit.

function enterkey(){
	
	var enterk = event.which || event.keyCode;
	
	if(enterk==13){
		
		showheather();
	}
	
}

function showheather(){
	
	
	
	var cName = document.getElementById("searchbox").value;
	var wgoes = document.getElementById("posterdiv");
	var urlapi = "api.openweathermap.org/data/2.5/weather?q="+cName+"";
	
	
	var http = new XMLHttpRequest();
	
	http.open("GET",urlapi,true)
	http.send()
	
	
	 http.onreadystatechange = function(){
        
        if(http.status==200 && http.readyState==4){
            
            var wdata =JSON.parse(http.responseText)
		
			wgoes.innerHTML = wdata.city.name
			
		}
		
	}
	
}
document.write(urlapi);