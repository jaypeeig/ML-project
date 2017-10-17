prime <- function(n) {
	if(n <= 1) {
		return(FALSE)
	}
	if(n == 2) {
		return(TRUE)
	}
	for(i in 1:floor(sqrt(n))+1) {
		if(n%%i == 0) {
			return(FALSE)
		}
	}
	return(TRUE)
}

sum_primes <- function() {
	l <- 0
	for(i in 1:2000000) {
		if(prime(i)) {
			l <- l + i
		}
	}
	l
}

sum_primes()

