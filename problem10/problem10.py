def prime(n):
	from math import sqrt, floor
	if n <= 1:
		return False
	for i in xrange(2, int(floor(sqrt(n)))+1):
		if n%i ==0:
			return False
	return True

def sum_primes():
	return sum([i for i in xrange(2,2000000) if prime(i)])

print sum_primes()
