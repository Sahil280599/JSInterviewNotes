class BankAccount{

    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.balance += amount;
    }


    withdraw(amount){
        this.balance -= amount; 
    }
}


class CurrentAccount extends BankAccount {
    transcationLimit = 50000;

    constructor(customerName, balance=0){
        super(customerName, balance)
    }

    takeBusinessLoan(amount){
        console.log("taking business loan" + amount);
    }
}


class SavingsAccount extends BankAccount {
    transcationLimit = 50000;

    constructor(customerName, balance=0){
        super(customerName, balance)
    }

    takeBusinessLoan(amount){
        console.log("taking business loan" + amount);
    }
}


const SahilAccount = new CurrentAccount("sahil", 1000)
sahilAccount.deposit(500);

