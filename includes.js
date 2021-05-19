//! description
//The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate

//The includes() method is case sensitive.

//! how does it work?
// Parameters
// searchString -> A string to be searched for within str.

// position Optional -> The position within the string at which to begin searching for searchString. (Defaults to 0.)

// Return value
// true if the search string is found anywhere within the given string; otherwise, false if not

//! time complexity

//! examples
//* example 1
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
	`The word "${word}" ${
		sentence.includes(word) ? 'is' : 'is not'
	} in the sentence`
);
// expected output: "The word "fox" is in the sentence"

//* example 2
'Blue Whale'.includes('blue'); // returns false

//* example 3
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be')); // true
console.log(str.includes('question')); // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1)); // false
console.log(str.includes('TO BE')); // false
console.log(str.includes('')); // true
