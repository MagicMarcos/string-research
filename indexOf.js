//! description
//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.

//Returns -1 if the value is not found.

//Characters in a string are indexed from left to right.

//The indexOf() method is case sensitive

//! how does it work?
// searchValue
// -> The string value to search for.

// -> If no string is explicitly provided, searchValue will be coerced to "undefined", and this value will be searched for in str.

// -> So, for example: 'undefined'.indexOf() will return 0, as undefined is found at position 0 in the string undefined. 'undefine'.indexOf() however will return -1, as undefined is not found in the string undefine.

// fromIndex Optional
// -> An integer representing the index at which to start the search. Defaults to 0.

// -> For fromIndex values lower than 0, or greater than str.length, the search starts at index 0 and str.length, respectively.

// -> For example, 'hello world'.indexOf('o', -5) will return 4, as it starts at position 0, and o is found at position 4. On the other hand, 'hello world'.indexOf('o', 11) (and with any fromIndex value greater than 11) will return -1, as the search is started at position 11, a position after the end of the string.

// Return value
// -> The index of the first occurrence of searchValue, or -1 if not found.

// -> An empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value

//However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length

//! time complexity
//? O(n) linear -> indexOf has to search through the string, so the size of the string will likely affect its time to completion

//! examples
//* ex 1
const str = 'Brave new world';

console.log('Index of first w from start is ' + str.indexOf('w')); // logs 8
console.log('Index of "new" from start is ' + str.indexOf('new')); // logs 6

//* ex 2
const str = 'To be, or not to be, that is the question.';
let count = 0;
let position = str.indexOf('e');

while (position !== -1) {
	count++;
	position = str.indexOf('e', position + 1);
}

console.log(count); // displays 4

//* ex3
const myString = 'brie, pepper jack, cheddar';
const myCapString = 'Brie, Pepper Jack, Cheddar';

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'));
// logs 19
console.log(
	'myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar')
);
// logs -1
