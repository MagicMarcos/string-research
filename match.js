//! description
// The match() method retrieves the result of matching a string against a regular expression.
//If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec().

//! how does it work?
// Parameters
// -> regexp
// A regular expression object.

// If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).

// If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].

// Return value
// An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

// If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
// if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.

// Additional properties
// As explained above, some results contain additional properties as described below.

// -> groups
// An object of named capturing groups whose keys are the names and values are the capturing groups or undefined if no named capturing groups were defined. See Groups and Ranges for more information.
// -> index
// The index of the search at which the result was found.
// -> input
// A copy of the search string.

//! time complexity

//! examples
//* ex1
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.

//* ex2
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

//* ex3

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
