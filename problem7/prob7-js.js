/*
	https://projecteuler.net/problem=5
*/

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}

const primeFind = (limit) => {
	let acc = 0;
	for (var i = 1; true; i++) {
		if (isPrime(i)) {
			acc++;

			if (acc == limit) {
				return i;
				break;
			}
		}
	}
}

console.log(primeFind(10001));

