package main

import (
	"fmt"
	"log"
)

/* use of the for loop instead of a recursion, to avoid a possible stack overflow if it is necessary to calculate a very large factorial. */

func Factorial(n int) int {
  if n < 0 {
    log.Fatal("Unable to calculate the factorial of a negative number");  
  }
  
  acc := 1;
  
  for i := n; i >= 2; i-- {
    acc *= i;
  }

  return acc;
}

func main() {
  var n int;
  _, err := fmt.Scanf("%d", &n);

  if err != nil {
    log.Fatal(err);  
  }

  result := Factorial(n);
  
	fmt.Printf("The factorial of %d is = %d", n, result);
}
