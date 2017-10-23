/*
	Lodash
	NOTE: see docs at https://lodash.com/docs/4.17.4
*/

const _ = require('lodash');

//console.log(_.range(1, 101));

const tryErr = (x, y) => {
	return (x*x) + (y*y) + ((x*x) + (y*y));
}

console.log(tryErr(10,20));
