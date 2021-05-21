//! description
//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

//! how does it work?
// Parameters
// count -> An integer between 0 and +Infinity, indicating the number of times to repeat the string.

// Return value -> A new string containing the specified number of copies of the given string.

// Exceptions
// RangeError: repeat count must be non-negative.
// RangeError: repeat count must be less than infinity and not overflow maximum string size.

//! time complexity
//? my guess -> linear (O(n)) as it has to recreate an entire string, so the length of the string will affect the time it takes for this to process

//! examples
'abc'.repeat(-1); // RangeError
'abc'.repeat(0); // ''
'abc'.repeat(1); // 'abc'
'abc'.repeat(2); // 'abcabc'
'abc'.repeat(3.5); // 'abcabcabc' (count will be converted to integer)
'abc'
	.repeat(1 / 0)(
		// RangeError

		{ toString: () => 'abc', repeat: String.prototype.repeat }
	)
	.repeat(2);
// 'abcabc' (repeat() is a generic method)

const chorus = "Because I'm happy. ";

//!---------------------------------------------------------------------

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
