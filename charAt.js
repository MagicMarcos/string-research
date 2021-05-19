//! description
// Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character—in a string called stringName—is stringName.length - 1. If the index you supply is out of this range, JavaScript returns an empty string.

// If no index is provided to charAt(), the default is 0.

//! how does it work?
// index
//     An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned
// Return value
//     A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of range, charAt() returns an empty string

//! time complexity

//!examples

var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt() + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0) + "'");
//The character at index 0   is 'B'

console.log("The character at index 1   is '" + anyString.charAt(1) + "'");
// The character at index 1   is 'r'

console.log("The character at index 999 is '" + anyString.charAt(999) + "'");
//The character at index 999 is ''
