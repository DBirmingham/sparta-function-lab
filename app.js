// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (a,b) {
	return a * b
}
// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree (a,b,c) {
	return a + b + c
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber (a,b) {
	if (a > b) {
		return b
	} else {
		return a
	}
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree (a,b,c) {
	return Math.max(a,b,c);
}
// 5. Write a function called 'reverseString' that returns the reverse a string 
function reverseString (string) {
	var reverse = '';
	for (var i = string.length - 1; i >= 0; i--) {
		reverse += string[i];
	}
	return reverse;
}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel (string) {
	var vowels = '';
	for (var i = string.length; i >= 1; i--) {
		if (string[string.length - i] == 'a' || string[string.length - i] == 'u' || string[string.length - i] == 'o' || string[string.length - i] == 'i' || string[string.length - i] == 'e') {
			
		} else {
			vowels += string[string.length - i]
		}
	}
	return vowels;
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd (array) {
	var rv = []
	for (var e = 0; e < array.length; e++) {
		if (!(array[e] % 2)) {
			rv.push(array[e]);
		}
	}
	return rv;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven (array) {
	var rv = []
	for (var e = 0; e < array.length; e++) {
		if (array[e] % 2) {
			rv.push(array[e]);
		}
	}
	return rv;
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString (array) {
	var arrsize = []
	var longest = null;
	for (var i = 0; i < array.length; i++) {
		arrsize.push(array[i].length);
	}
	var biggest = Math.max.apply(null, arrsize);
	console.log(biggest);
	for (var i = 0; i < array.length; i++) {
		if (array[i].length == biggest) {
			longest = array[i];
		}
	}
	console.log(longest);
	return longest
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array, 
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree (array) {
	for (var i = 0; i < 3; i++) {
		array.splice(0,1);
	}
	return array;
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject (array) {
	if ((array.length % 2) == 0) {
		var hash = {};
		for (var i = 0; i < (array.length - 1); i++) {
			if (!(i % 2)) {
				hash[array[i]] = array[i+1];
			}
		}
		return hash;
	}
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules 

// But for multiples of three print "Fizz" instead of the number 
// For the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz (num) {
	var set = ''
	if ((num % 3) == 0) {
		set = 'Fizz';
	} else if ((num % 5) == 0) {
		set = 'Buzz'
	} else if ((num % 5) == 0 && (num % 3) == 0) {
		set = 'FizzBuzz'
	}
	return set;
}
