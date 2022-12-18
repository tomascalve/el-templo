// Returns a random number between two num parametters, Min and Max.
export const randomMinMax = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// Returns a random Hexadecimal value, it length depends of one numeric parametter.
// Default length = 7.
export const randomHexadecimal = (length = 7) => {
	const character = '11223344556677889900abcdefghijklmnopqrstuvwxyz';
	const result = [];

	for (let i = 0; i < length; i++) {
		result.push(character[randomMinMax(0, 45)]);
	}

	return result.join('');
};
