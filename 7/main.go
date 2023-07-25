package main

import (
	"fmt"
	"log"
)

// Dynamic programming method, using memorization to make recursive fibonacci more efficient, is a trade-off

var aux []int;

func Fibonacci(nth int) int {
  if (nth == 0 && len(aux) == 0) {
    aux = append(aux, 0);
  } else if (nth == 1 && len(aux) == 1) {
    aux = append(aux, 1);
  } else if ((len(aux) - 1) < nth) {
    aux = append(aux, Fibonacci(nth - 2) + Fibonacci(nth - 1))
  }
  
  return aux[nth];
}

func main() {
  var nth int;

  _, err := fmt.Scanf("%d", &nth);

  if err != nil {
    log.Fatal(err);
  }
  
	fmt.Printf("The %dth term of the fibonaci sequence is %d", nth, Fibonacci(nth));
}
