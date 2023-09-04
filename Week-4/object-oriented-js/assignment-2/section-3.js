class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._accountHolderName = accountHolderName;
  }

  getBalance() {
    return this._balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.log('Insufficient funds');
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  withdraw(amount) {
    if (this._balance - amount >= 0) {
      this._balance -= amount;
    } else {
      console.log('Withdrawal failed. Insufficient funds');
    }
  }
}

// Creating instances and testing
const checking = new CheckingAccount('#123456', 1000, 'John Doe');
checking.deposit(500);
checking.withdraw(300);
console.log('Checking Account Balance:', checking.getBalance());

const savings = new SavingsAccount('#789012', 1500, 'Jane Smith');
savings.deposit(200);
savings.withdraw(1800);
console.log('Savings Account Balance:', savings.getBalance());
