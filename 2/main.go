package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"regexp"
)

func IsPalindrome(text string) bool {
  pattern := regexp.MustCompile("[^a-zA-Z0-9]+");
  str := pattern.ReplaceAllString(text, "");
  strLen := len(str) - 1;
  
  for i := 0; i <= (strLen/2); i++ {
    if str[i] != str[strLen - i] {
      return false;
    }
  }

  return true;
}

func main() {
  scanner := bufio.NewScanner(os.Stdin)
  scanner.Scan();

  if err := scanner.Err(); err != nil {
    log.Fatal(err);
  }
  
  text := scanner.Text();
  
  isPalindrome := IsPalindrome(text);
	fmt.Printf("\"%s\" is a palindrome? %t", text, isPalindrome)
}
