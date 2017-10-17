checker <- function(a,b,c) {
	return(a^2 + b^2 == c^2)
}

special <- function() {
	for(x in 1:1000) {
		for(y in x+1:1000) {
			z = 1000 - (x + y)
			if(checker(x,y,z)) {
				return(x*y*z)
			}
		}
	}
}

special()