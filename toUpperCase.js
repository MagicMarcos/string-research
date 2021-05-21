//! description
//The toUpperCase() method returns the value of the string converted to Upper case. toUpperCase() does not affect the value of the string str itself.

//! how does it work?
// toUpperCase()

//? Return value
// A new string representing the calling string converted to Upper case.

//? TypeError
// When called on null or undefined, for example, String.prototype.toUpperCase.call(undefined)

//! time complexity
//? length of string determines time the function takes to fire -> O(n) linear

//! examples
//* ex1
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

//*ex 2
console.log('alphabet'.toUpperCase()); // 'ALPHABET'

//*ex 3
console.log('MarcoS'.toUpperCase()); // 'MARCOS'
