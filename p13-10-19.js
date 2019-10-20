//inpur
// 2,5 print twentyfive Array loop  no to work
// 36 thirty six 
// 11 
// 71   78
// mudous and prime no 26   
// array main 10 no kia array random no loop say kerna hain duplicate no not allow


// var mycity = prompt("your city ");
// var aCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "RWP" , "Larkhana", "Sailkot"];
// var notFound = true;
// for(var index =0; index<aCities.length; index++){
//     if(aCities[index] == mycity){
//         alert("Found my city " + aCities[index]);   
//         notFound = false; 
//         break;
//     }
    
//     }
// if(notFound){
//     alert("Not Found")
// }

// var mycity = prompt("your city ");
// var aCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "RWP" , "Larkhana", "Sailkot"];
// var isFound = false;
// for(var index =0; index<aCities.length; index++){
//     if(aCities[index].toLocaleLowerCase() == mycity.toLowerCase()){
//         alert("Found my city " + aCities[index]);   
//         isFound = true; 
//         break;
//     }
    
//     }
// if(!isFound){
//     alert("Not Found")
// }

// var mycity = ["Karachi", "LAHORE", "Islamabad"];
// var aCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "RWP" , "Larkhana", "Sailkot"];
// var isFound = false;
// for(var index =0; index<aCities.length; index++){
//     if(aCities[index].toLocaleLowerCase() == mycity[2].toLowerCase()){
//            console.log("Found my city " + aCities[index]);   
//         isFound = true; 
//         break;
//     }
    
//     }
// if(!isFound){
//     console.log("Not Found");
// }

// var mycity = prompt("your city ");
// var aCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "RWP" , "Larkhana", "Sailkot"];
// var isFound = false;
// for(var index =0; index<aCities.length; index++){
//     if(aCities[index].toLocaleLowerCase() == mycity[2].toLowerCase()){
//            console.log("Found my city " + aCities[index]);   
//         isFound = true; 
//         break;
//     }
    
//     }
// if(!isFound){
//     console.log("Not Found");
// }

// var mycity = prompt("your city ");
// var aCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "RWP" , "Larkhana", "Sailkot"];
// var isFound = false;
// for(var index =0; index<aCities.length; index++){
//     if(aCities[index].toLocaleLowerCase() === aCities[index].toLocaleLowerCase()){
//            console.log("Found my city " + aCities[index]);   
//         isFound = true; 
//         break;
//     }
    
//     }
// if(!isFound){
//     console.log("Not Found");
// }

// var aCities = "Karachi";
// console.log(aCities.slice(0,1)+aCities.slice(5));


// var aCities = "Karachi";
// var city = aCities.slice(0,1)+aCities.slice(5)
// console.log("my City is " + aCities + " short code is " +city.toUpperCase());

// var month = prompt("Enter Month");
// if(month.length > 3){
//     console.log(month.slice(0,3).toUpperCase());
// }
// else{
//     console.log(month.toUpperCase());
// }

// var text = "the great war of words";
// var stext = "war";
// console.log(text);
// console.log("Found the word " +text.indexOf(stext));
// var replace = "peace";
// var startf = text.indexOf(stext);
// var textp = text.slice(0, startf);
// console.log(textp);
// var textp1 = text.slice(13);
// console.log(textp1);
// var replacet = textp+replace+textp1;
// console.log(replacet);

//last index of

// var text = "to be or not to be";  // b kitni bar aya hain
// console.log(""+ text.indexOf("be"));

//chartat charater ata hain
// var city = "Karachi";
// console.log("frist word " +city.charAt(0) );
// console.log("last word " +city.charAt(city.length-1) );


//replace 
// var text = "to be or not to be";
// console.log(text.replace("or","and"));

// var text = "to be or not to be";
// // console.log(text.replace("be","been"));
// console.log(text.replace("/be/g","been"));

// var avg = 26.345;
// console.log(Math.round(avg));
// console.log(Math.floor(avg));
// console.log(Math.ceil(avg));

// var random = Math.random();
// var dice = (random*6);
// console.log(random);
// console.log(dice);


// var random = Math.random();
// var dice = (random*6);
// console.log(random);
// console.log(Math.floor(dice));
// console.log(Math.ceil(dice));

//PARSINT AND FLOAT
// var strno = "123.12344";
// console.log(parseInt(strno));
// console.log(parseFloat(strno));
// console.log(Number(strno));

// var strno = "123.12344";
// var Numbe = Number(strno);
// console.log(Numbe.toFixed(2));

var days = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thusday", "Friday", "Saturday"];
var now = new Date();
var mydate = new Date("1/10/2019");
console.log(day[mydate.getDate()]);
console.log(mydate.getMonth());
console.log(mydate.getFullYear());
console.log(mydate.getTime()/(1000 * 60 * 60 *24));
// mydate.setFullYear(2018);
