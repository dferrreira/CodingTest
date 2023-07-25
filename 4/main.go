package main

import (
	"fmt"
)

type Data struct {
  value int;
  next * Data;
}

type Stack struct {
  top * Data;
}

//Initialize a new stack structure
func NewStack (initialTop * Data) *Stack {
  return &Stack{top: initialTop}
}

//Set the new element on the top of the stack
func (s * Stack) Push(newElement * Data) {
  newElement.next = s.top;
  s.top = newElement;
}

//Remove the element on the top of the stack and return it
func (s * Stack) Pop() *Data {
  if s.top != nil {
    safe := s.top;

    s.top = safe.next;
    safe.next = nil;

    return safe;
  }

  return nil;
}

func (s * Stack) IsEmpty() bool {
  return s.top == nil;
}

func main() {
	//Example

  // Empty Stack
  myStack := NewStack(nil);
  fmt.Println(myStack.top, myStack.IsEmpty());

  // Add 10 on the top
  myStack.Push(&Data{ value: 10 })
  fmt.Println(myStack.top.value, myStack.IsEmpty());
  // Add 20 on the top
  myStack.Push(&Data{ value: 20 })
  fmt.Println(myStack.top.value, myStack.IsEmpty());
  // Remove 20 from the top
  removedValue := myStack.Pop()
  fmt.Println(myStack.top.value, myStack.IsEmpty(), removedValue);
  // Remove 10 from the top, and back empty
  removedValue = myStack.Pop()
  fmt.Println(myStack.top, myStack.IsEmpty(), removedValue);
}
