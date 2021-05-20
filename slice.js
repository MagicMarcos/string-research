//! description
// slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.

// slice() extracts up to but not including endIndex. str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).

// As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.

//! how does it work?
// Parameters
// -> beginIndex
// The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.

// If beginIndex is greater than or equal to str.length, an empty string is returned.

// -> endIndex Optional
// The zero-based index before which to end extraction. The character at this index will not be included.

// If endIndex is omitted or undefined, or greater than str.length, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.) If it is not undefined, and Number(endIndex) is not positive, an empty string is returned.

// If endIndex is specified, endIndex should be greater than beginIndex, otherwise an empty string is returned. (For example, slice(-3, 0), slice(-1, -3), or slice(3, 1) returns "".)

// Return value -> A new string containing the extracted section of the string.

//! time complexity

//! examples
//* ex1
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"

//* ex2
let str1 = 'The morning is upon us.', // the length of str1 is 23.
	str2 = str1.slice(1, 8),
	str3 = str1.slice(4, -2),
	str4 = str1.slice(12),
	str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""

//* ex3
let str = 'The morning is upon us.';
str.slice(-3); // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1); // returns 'The morning is upon us'
