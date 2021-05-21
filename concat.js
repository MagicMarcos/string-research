//! description
//The concat() method concatenates the string arguments to the calling string and returns a new string.

//Changes to the original string or the returned string don't affect the other.

// If the arguments are not of the type string, they are converted to string values before concatenating.

//! how does it work?
// Parameters
// strN -> One or more strings to concatenate to str.

// Return value
// A new string containing the combined text of the strings provided.

//! time complexity
//? O(n) linear -> as number of strings increase, then the function will take longer to complete

//It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method.

//! examples

let hello = 'Hello, ';
console.log(hello.concat('Kevin', '. Have a nice day.'));
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!'];
''.concat(...greetList); // "Hello Venkat!"

''.concat({}); // [object Object]
''.concat([]); // ""
''.concat(null); // "null"
''.concat(true); // "true"
''.concat(4, 5); // "45"

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
