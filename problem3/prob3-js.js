/*
	https://projecteuler.net/problem=3
*/

const num = 600851475143;
var foo = 0;

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1;
}


for (let i = 2; i <= num; i++) {
	if ((num % i == 0)){
		if (isPrime(i)) {
			foo = i;
		}else{
			break;
		}
	}
}

console.log(foo);


