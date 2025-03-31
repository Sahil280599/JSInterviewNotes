// Polymorphism - Ability of objects to take multiple forms

class BankAccount {
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }

    // Base method that can be overridden
    calculateInterest() {
        return 0;
    }

    // Method that uses polymorphism
    addInterest() {
        const interest = this.calculateInterest();
        this.balance += interest;
        console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
    }
}

class SavingsAccount extends BankAccount {
    constructor(customerName, balance = 0) {
        super(customerName, balance);
        this.interestRate = 3.5;
    }

    // Override the base method
    calculateInterest() {
        return this.balance * (this.interestRate / 100);
    }
}

class FixedDepositAccount extends BankAccount {
    constructor(customerName, balance = 0) {
        super(customerName, balance);
        this.interestRate = 6.5;
        this.lockInPeriod = 12; // months
    }

    // Override the base method with different implementation
    calculateInterest() {
        return this.balance * (this.interestRate / 100) * (this.lockInPeriod / 12);
    }
}

// Example usage demonstrating polymorphism
const accounts = [
    new SavingsAccount("Sahil", 10000),
    new FixedDepositAccount("Smriti", 50000)
];

// Same method call, different behaviors
accounts.forEach(account => {
    console.log(`\nProcessing ${account.constructor.name}:`);
    account.addInterest();
}); 