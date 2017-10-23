

const triNum = (num) => num*(num+1)/2; 

const divisorNum = (num) => {
	if (num == 1) { return num; }
	let numberOfDivisors = 0;
	for (let i = 1; i < num; ++i) {
        if (num % i == 0) {
            numberOfDivisors++;
        }
    }
    return numberOfDivisors;
}

for (let i = 1; true; i++) {
	let tri = triNum(i);
	let numDiv = divisorNum(tri);
	console.log(tri + ' | ' + numDiv);
	if (numDiv >= 500) {
		console.log('Gotcha!');
		console.log(tri);
		break;
	}
}
