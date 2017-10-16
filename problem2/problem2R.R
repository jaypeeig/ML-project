fibonacci <- function() {
     sums <- 0
     x <- 1; y <- 1
     while(x <= 4000000) {
          if(x %% 2 == 0) {
               sums <- sums + x
          }
          z <- y;y <- x + y;x <- z
     }
     return(sum(sums))
}

fibonacci()