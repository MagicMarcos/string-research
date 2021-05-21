//! description
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

// When found, separator is removed from the string, and the substrings are returned in an array.

// If separator is a regular expression with capturing parentheses, then each time separator matches, the results (including any undefined results) of the capturing parentheses are spliced into the output array.

// If the separator is an array, then that Array is coerced to a String and used as a separator.

//! how does it work?
//? Parameters
//* separator Optional
// The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.

// -> The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
// -> If separator contains multiple characters, that entire character sequence must be found in order to split.
// -> If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
// -> If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
// -> If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
// -> Warning: When the empty string ("") is used as a separator, the string is not split by user-perceived characters (grapheme clusters) or unicode characters (codepoints), but by UTF-16 codeunits. This destroys surrogate pairs. See “How do you get a string to a character array in JavaScript?” on StackOverflow.

//* limit Optional
// A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

// -> The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
// -> If limit is 0, [] is returned.

//? Return value
// An Array of strings, split at each point where the separator occurs in the given string

//! time complexity
//? O(1) constant -> the function will fire at the same rate regardless of string changes

//! examples
//* ex 1
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

//* ex 2
const myString = 'Hello World. How are you doing?';
const splits = myString.split(' ', 3);

console.log(splits);

//* ex 3
function splitString(stringToSplit, separator) {
	const arrayOfStrings = stringToSplit.split(separator);

	console.log('The original string is: ', stringToSplit);
	console.log('The separator is: ', separator);
	console.log(
		'The array has ',
		arrayOfStrings.length,
		' elements: ',
		arrayOfStrings.join(' / ')
	);
}

const tempestString = 'Oh brave new world that has such people in it.';
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

const space = ' ';
const comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
