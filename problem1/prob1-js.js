/*
	https://projecteuler.net/problem=1
*/

const nums = [];

for (let i = 1; i < 1000; i++) {
   nums.push(i);
}

const proct = nums.filter( (num) => (num % 3 == 0 || num % 5 == 0) );
const sum = proct.reduce((acc, val) => acc + val);

console.log(sum);