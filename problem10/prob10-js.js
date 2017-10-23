/*
	https://projecteuler.net/problem=9
*/

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

const sumPrime = Array.from(Array(2000001).keys()).reduce((acc, val) => {
	return (isPrime(val)) ? val + acc : acc;
});

console.log(sumPrime);