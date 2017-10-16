/*
	https://projecteuler.net/problem=4
*/


let min = 100;
let limit = 999;
let nums = [];

const checkPalindrom = (num) => {
	str = num.toString();
    return str == str.split('').reverse().join('');
}

for (let i = min; i <= limit; i++) {
	for (let x = min; x <= limit; x++) {
		if (checkPalindrom(i * x)) {
			nums.push(i * x);
		}
	}	
}

const max = nums.reduce((acc,val) => Math.max(acc,val))

console.log(max);