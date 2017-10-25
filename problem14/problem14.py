def collatz(n, count=1):
	while n > 1:
		count+=1
		if n%2 == 0: n = n/2
		else: n = 3*n + 1
	return count

largest = 0 
count = 0 
for i in range(1000000):
	if collatz(i) > count:
		largest = i
		count = collatz(i)
print largest

