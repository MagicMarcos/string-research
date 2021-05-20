//! description
//The search() method executes a search for a match between a regular expression and this String object.
//When you want to know whether a pattern is found, and also know its index within a string, use search(). (If you only want to know if it exists, use the similar test() method on the RegExp prototype, which returns a boolean.)

//For more information (but slower execution) use match() (similar to the regular expression exec() method).

//! how does it work?
// Parameters
// regexp
// -> A regular expression object.

// -> If a non-RegExp object regexp is passed, it is implicitly converted to a RegExp with new RegExp(regexp).

// Return value -> The index of the first match between the regular expression and the given string, or -1 if no match was found.

//! time complexity

//! examples

const paragraph =
	'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

let str = 'hey JudE';
let re = /[A-Z]/g;
let reDot = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
