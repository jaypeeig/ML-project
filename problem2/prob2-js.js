/*
	https://projecteuler.net/problem=2
*/

let fib = [1,2];

for(let i=2; i <= 31; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
}

const fibFilt = fib.filter((num) => num % 2 == 0).reduce((acc,val) => acc + val);

console.log(fibFilt);