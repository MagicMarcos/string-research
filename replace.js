//! description
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

// The original string is left unchanged.

// This method does not change the calling String object. It returns a new string.

// To perform a global search and replace, include the g switch in the regular expression.

//! how does it work?
// Parameters
// regexp (pattern) -> A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.

// substr -> A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

// newSubstr (replacement) -> The String that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.

// replacerFunction (replacement) -> A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

// Return value -> A new string, with some or all matches of a pattern replaced by a replacement.

// Pattern	Inserts
// $$ |	Inserts a "$".

// $& |	Inserts the matched substring.

// $` |	Inserts the portion of the string that precedes the matched     substring.

// $' |	Inserts the portion of the string that follows the matched substring.

// $n |	Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed. If a group n is not present (e.g., if group is 3), it will be replaced as a literal (e.g., $3).

// $<Name> |	Where Name is a capturing group name. If the group is not in the match, or not in the regular expression, or if a string was passed as the first argument to replace instead of a regular expression, this resolves to a literal (e.g., $<Name>). Only available in browser versions supporting named capturing groups.

//! time complexity

//! examples
//* ex 1
const p =
	'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

//* ex 2
function replacer(match, p1, p2, p3, offset, string) {
	// p1 is nondigits, p2 digits, and p3 non-alphanumerics
	return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%

//*ex 3
let str = 'Twas the night before Xmas...';
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...
