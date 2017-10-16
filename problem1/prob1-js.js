/*
	https://projecteuler.net/problem=1
	One line bitch
*/

const proct = Array.from(Array(1000).keys()).filter( (num) => (num % 3 == 0 || num % 5 == 0) ).reduce((acc, val) => acc + val);

console.log(proct);