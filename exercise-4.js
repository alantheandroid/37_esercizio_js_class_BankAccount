class BankAccount {
  constructor(funds) {
    this.funds = funds;
    console.log(`Starting funds: ${this.funds}`);
  }
  deposit(x) {
    let result = this.funds + x;
    console.log(`Adding ${x} to ${this.funds} = ${result}`);
    return (this.funds = result);
  }
  withdraw(x) {
    let result = this.funds - x;
    console.log(`Subtracting ${x} to ${this.funds} = ${result}`);
    return (this.funds = result);
  }
  view() {
    console.log(`Current balance: ${this.funds}`);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
