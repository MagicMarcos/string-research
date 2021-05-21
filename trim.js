//! description
// The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

//! how does it work?
// trim()

//? Return value
// A new string representing str stripped of whitespace from both its beginning and end.

// If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown.

// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

//! time complexity
//? O(1) constant -> regardless of the string length the function fires at a constant rate

//! examples
//* ex1
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

//* ex2
const dog = '   Bagheera   ';

console.log(dog);
// expected output: "   Bagheera   ";

console.log(dog.trim());
// expected output: "Bagheera";

//* ex3
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
