//! description
//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards

// substr() extracts length characters from a str, counting from the start index.

// -> If start is a positive number, the index starts counting at the start of the string. Its value is capped at str.length.
// -> If start is a negative number, the index starts counting from the end of the string. Its value is capped at -str.length.
// -> Note: In Microsoft JScript, negative values of the start argument are not considered to refer to the end of the string.
// ->If length is omitted, substr() extracts characters to the end of the string.
// ->If length is undefined, substr() extracts characters to the end of the string.
// ->If length is a negative number, it is treated as 0.
// For both start and length, NaN is treated as 0.

//! how does it work?
// substr(start)
// substr(start, length)
//? Parameters

//* start
// The index of the first character to include in the returned substring.

//* length
// Optional. The number of characters to extract.

//? Return value
// A new string containing the specified part of the given string

//! time complexity

//! examples
//* ex1
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

//* ex
var aString = 'Mozilla';

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
