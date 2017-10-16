def fibonacci():
	x, y = 1, 1
	sums = 0 
	while x <= 4000000:
		if x % 2 == 0:
			sums += x
		x, y = y, x+y
	return sums

print fibonacci()