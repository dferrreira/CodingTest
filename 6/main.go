package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"regexp"
	"strings"
)

func CountWords(fileSrc string) int {
  file, err := os.Open(fileSrc);

  if err != nil {
    log.Fatal(err);
  }

  defer file.Close();

  var wordCount int = 0;
  scanner := bufio.NewReader(file);
  pattern := regexp.MustCompile("[^a-zA-Z0-9À-ÿ]+$");
  
  for {
    line, _, err := scanner.ReadLine();
    str := strings.Fields(pattern.ReplaceAllString(string(line), ""));
    wordCount += len(str);

    if err == io.EOF {
      break;
    }
  }

  return wordCount;
}

func main() {

  var filePath string;

  _, err := fmt.Scanln(&filePath)

  if err != nil {
    log.Fatal(err);
  }
  
	words := CountWords(filePath);

  fmt.Printf("Number of words in file %d", words);
}
