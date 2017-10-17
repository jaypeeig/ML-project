def checker(a,b,c):
	return a**2 + b**2 == c**2

def special():
	for x in xrange(1, 1000):
		for y in xrange(x+1, 1000):
			z = 1000 - (x + y)
			if checker(x,y,z):
				print x, y, z
				return x*y*z

print special()