package main

import (
	"fmt"
	"log"
)

type BankAccount interface {
  Deposit() bool
  Withdraw() bool
  AccountBalance() float64
}

type BasicAccount struct {
  balance float64
}

func (s * BasicAccount) Deposit (value float64) bool {
  if value <= 0 {
    log.Fatal("it is not possible to deposit an amount less than or equal to zero");
    return false;  
  }
  
  s.balance += value;
  return true;
}

func (s * BasicAccount) Withdraw (value float64) bool {
  if s.balance < value {
    log.Fatal("Requested amount unavailable for withdraw.");
    return false;
  }

  s.balance -= value;
  return true;
}

func (s * BasicAccount) AccountBalance () float64 {
  return s.balance;
}

// Can implement methods for update account balance with interestRate only for example
type SavingsAccount struct {
  BasicAccount
  interestRate float32
}

// Can implement methods for use the credit limit only for example
type CheckingAccount struct {
  BasicAccount
  creditLimit float64
}

func main() {
	//Example

  BasicAccount := &BasicAccount{}
  SavingsAccount := &SavingsAccount{}
  CheckingAccount := &CheckingAccount{}

  BasicAccount.Deposit(200);
  fmt.Println("Basic Account balance:", BasicAccount.AccountBalance());  
  BasicAccount.Withdraw(100);
  fmt.Println("Basic Account balance:", BasicAccount.AccountBalance());

  SavingsAccount.Deposit(200);
  fmt.Println("Savings Account balance:", SavingsAccount.AccountBalance());  
  SavingsAccount.Withdraw(100);
  fmt.Println("Savings Account balance:", SavingsAccount.AccountBalance());

  CheckingAccount.Deposit(200);
  fmt.Println("Checking Account balance:", CheckingAccount.AccountBalance());  
  CheckingAccount.Withdraw(100);
  fmt.Println("Checking Account balance:", CheckingAccount.AccountBalance());

  //Example withdraw value greather than balance available

  CheckingAccount.Withdraw(200);
}
