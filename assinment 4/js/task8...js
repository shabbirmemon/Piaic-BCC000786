// Q 8 Convert number in words. Example
// Input
// 23
// 123
// 1234
// Output
// Twenty Three
// One Hundred and Twenty Three
// One Thousand Two Hundred and Thirty Four.

// var no = 546;
// var str = no.toString();
// var splt = str.split("");
// var rev = splt.reverse();
// var once = ['', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
// var twos = ['', 'Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
// var tens = ['', '', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

// if (no < 10){
//     document.write(once[no]);
// }
// else if (str.length === 2 && strNumber.charAt(1) === "0") {
//     console.log(tens[strNumber.charAt(0)]);
// } else if (no < 100) {
//     console.log(tens[strNumber.charAt(0)] + " " + once[strNumber.charAt(1)]);
// } 

// else if (strNumber.length === 3 && strNumber.charAt(1) === "0" && strNumber.charAt(2) === "0") {
//     console.log(Numbs[strNumber.charAt(0)]);
// } else if (strNumber.length === 3 && strNumber.charAt(1) === "1") {
//     console.log(dredNumbs[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(1) + strNumber.charAt(2)]);
// } else if (strNumber.length === 3 && strNumber.charAt(1) === "0") {
//     console.log(dredNumbs[strNumber.charAt(0)] + " & " + singleNum[strNumber.charAt(2)]);
// } else if (num > 100 && num < 1000) {
//     console.log(dredNumbs[strNumber.charAt(0)] + " & " + tyNumbs[strNumber.charAt(1)] + " " + singleNum[strNumber.charAt(2)]);
// } 

var root = typeof self == 'object' && self.self === self && self ||
typeof global == 'object' && global.global === global && global ||
this;


// Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb
function isFinite(value) {
return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}


var ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
var ENDS_WITH_TEEN_PATTERN = /teen$/;
var ENDS_WITH_Y_PATTERN = /y$/;
var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
var ordinalLessThanThirteen = {
zero: 'zeroth',
one: 'first',
two: 'second',
three: 'third',
four: 'fourth',
five: 'fifth',
six: 'sixth',
seven: 'seventh',
eight: 'eighth',
nine: 'ninth',
ten: 'tenth',
eleven: 'eleventh',
twelve: 'twelfth'
};

/**
* Converts a number-word into an ordinal number-word.
* @example makeOrdinal('one') => 'first'
* @param {string} words
* @returns {string}
*/
function makeOrdinal(words) {
// Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
    return words + 'th';
}
// Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
else if (ENDS_WITH_Y_PATTERN.test(words)) {
    return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
}
// Ends with one through twelve
else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
    return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
}
return words;
}

function replaceWithOrdinalVariant(match, numberWord) {
return ordinalLessThanThirteen[numberWord];
}


/**
* Converts an integer into a string with an ordinal postfix.
* If number is decimal, the decimals will be removed.
* @example toOrdinal(12) => '12th'
* @param {number|string} number
* @returns {string}
*/
function toOrdinal(number) {
var num = parseInt(number, 10);
if (!isFinite(num)) throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
var str = String(num);
var lastTwoDigits = num % 100;
var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
var lastChar = str.charAt(str.length - 1);
return str + (betweenElevenAndThirteen ? 'th'
        : lastChar === '1' ? 'st'
        : lastChar === '2' ? 'nd'
        : lastChar === '3' ? 'rd'
        : 'th');
}


var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

var LESS_THAN_TWENTY = [
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_LESS_THAN_HUNDRED = [
'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/**
* Converts an integer into words.
* If number is decimal, the decimals will be removed.
* @example toWords(12) => 'twelve'
* @param {number|string} number
* @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
* @returns {string}
*/
function toWords(number, asOrdinal) {
var words;
var num = parseInt(number, 10);
if (!isFinite(num)) throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
words = generateWords(num);
return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number) {
var remainder, word,
    words = arguments[1];

// We’re done
if (number === 0) {
    return !words ? 'zero' : words.join(' ').replace(/,$/, '');
}
// First run
if (!words) {
    words = [];
}
// If negative, prepend “minus”
if (number < 0) {
    words.push('minus');
    number = Math.abs(number);
}

if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];

} else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    // In case of remainder, we need to handle it here to be able to add the “-”
    if (remainder) {
        word += '-' + LESS_THAN_TWENTY[remainder];
        remainder = 0;
    }

} else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

} else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

} else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

} else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

} else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

} else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
    ' quadrillion,';
}

words.push(word);
return generateWords(remainder, words);
}

/**
* Converts a number into ordinal words.
* @example toWordsOrdinal(12) => 'twelfth'
* @param {number|string} number
* @returns {string}
*/
function toWordsOrdinal(number) {
var words = toWords(number);
return makeOrdinal(words);
}



var numberToWords = {
toOrdinal: toOrdinal,
toWords: toWords,
toWordsOrdinal: toWordsOrdinal
};

if (typeof exports != 'undefined') {
if (typeof module != 'undefined' && module.exports) {
    exports = module.exports = numberToWords;
}
exports.numberToWords = numberToWords;
} else {
root.numberToWords = numberToWords;
}

$(document).ready(function($)
	{

		$(document).on('click', '.btn_get_word', function(event) 
		{
			event.preventDefault();
			
			var get_num = $('.get_num').val();

			if(get_num)
			{
				//will convert numbers into words:
				var num_to_words = toWords(get_num);
				
				var d = '<div class="num_converted text-success bg-primary" style="padding:5px;">'+num_to_words+'</div>'
				$(document).find('.num_converted').html(d)
			}


		})
		 

	});