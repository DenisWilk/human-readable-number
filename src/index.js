// the essence of the script is contained in the positions 
//of the 'string names of numbers' in arrays (beforeTwenty, afterTwenty, hundreds).
//Array[] positions corresponds to a part of the numeric value of the function argument.

module.exports = function toReadable(numb) {

	const beforeTwenty = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
	];

	const afterTwenty = [
		'',
		'',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety',
	];

	const hundreds = [
		'',
		'one hundred',
		'two hundred',
		'three hundred',
		'four hundred',
		'five hundred',
		'six hundred',
		'seven hundred',
		'eight hundred',
		'nine hundred'
	];

	let beforeTwentyNumb;
	let digNumb;
	let digDecNumb;
	let digHundNumb;
	let twoCharStr;
	let twoCharNumb;

	const numbToString = numb.toString();
	const arrCharsFromString = Array.from(numbToString);


	if (numb < 20) {
		beforeTwentyNumb = beforeTwenty[numb];
		return beforeTwentyNumb;
	}

	if (arrCharsFromString.length === 2) {
		digDecNumb = afterTwenty[arrCharsFromString[0]];
		digNumb = beforeTwenty[arrCharsFromString[1]];
		if (arrCharsFromString[1] === '0') {
			return digDecNumb;
		}
		return `${digDecNumb} ${digNumb}`;
	}

	if (arrCharsFromString.length === 3) {
		digHundNumb = hundreds[arrCharsFromString[0]];
		twoCharStr = numbToString.substring(1);
		twoCharNumb = Number(twoCharStr);
		if (twoCharNumb === 0) return digHundNumb;
		toReadable(twoCharNumb);
	}

	return `${digHundNumb} ${(toReadable(twoCharNumb))}`;
}