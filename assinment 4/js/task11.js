// Q11 Write a program to take input of a Number and find a Mean of All
// Digits
// E.g: 666 = 6 + 6 + 6 = 18 /3 = 6
// 1246 = 1 + 2 + 4 + 5 = 12 / 4 = 3

var numbsForMean = 1246526;
numbsForMean = numbsForMean.toString();
var aryForMean = [];
var len = numbsForMean.toString().length;
var sum = 0;

for (var i = 0; i < len; i++) {
    aryForMean[i] = numbsForMean.charAt(i); 
}

for (var j = 0; j < len; j++) {
    sum += Number(aryForMean[j]);
}

var mean = (sum / len);
var fixedMean = Number(mean.toFixed(2));
console.log(mean); 
console.log(fixedMean); 
