/*
	https://projecteuler.net/problem=9
*/

const _ = require('lodash');
const isPytriplet = (x, y, z) => x*x + y*y == z*z;

for (let x = 1; x <= 1000; x++) {
	for (let y = 1; y <= 1000; y++) {
		let z = 1000 - (y + x);
		if(isPytriplet(x,y,z)){
			console.log(x*y*z);
			break;
		}
	}	
}