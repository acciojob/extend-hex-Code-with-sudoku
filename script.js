const extendHex = (shortHex) => {
  // write your code here
	const hexWithoutHash = shortHex.startsWith('#') ? shortHex.slice(1) : shortHex;

   
    const fullHex = hexWithoutHash
        .split('')
        .map(char => char + char)
        .join('');

    return '#' + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
