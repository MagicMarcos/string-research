// return a string where the longer input is reversed and the shorter is used as a prefix and a suffix for the longer. If they are the same length, treat a as the longer string.

function shorter_reverse_longer(a, b) {
	const bRev = Array.from(b).reverse().join('');
	const aRev = Array.from(a).reverse().join('');
	return a.length < b.length ? `${a}${bRev}${a}` : `${b}${aRev}${b}`;
}
