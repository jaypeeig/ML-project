/*
	https://projecteuler.net/problem=6
*/

let sumSqr = Array.from(Array(101).keys()).reduce((acc, val) => acc + (val * val));
let sumSqraw = Array.from(Array(101).keys()).reduce((acc, val) => acc + val);
console.log((sumSqraw * sumSqraw) - sumSqr);