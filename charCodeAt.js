//! description
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//The UTF-16 code unit matches the Unicode code point for code points which can be represented in a single UTF-16 code unit. If the Unicode code point cannot be represented in a single UTF-16 code unit (because its value is greater than 0xFFFF) then the code unit returned will be the first part of a surrogate pair for the code point.

//! how does it work?
// Parameters
// index -> An integer greater than or equal to 0 and less than the length of the string. If index is not a number, it defaults to 0.

// Return value
// A number representing the UTF-16 code unit value of the character at the given index. If index is out of range, charCodeAt() returns NaN.

//charCodeAt() returns NaN if the given index is less than 0, or if it is equal to or greater than the length of the string.

//! time complexity

//! examples
//* example 1
'ABC'.charCodeAt(0); // returns 65 which is the unicode value for A

//* example 2
'ABC'.charCodeAt(1); // returns 65 which is the unicode value for b

//* example 3
'ABC'.charCodeAt(2); // returns 65 which is the unicode value for c
