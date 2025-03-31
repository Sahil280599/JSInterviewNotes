// DRY - Don't Repeat Yourself

// Inheritance is a mechanism in which one object acquires properties and behaviors of another object.

function BankAccount(customername, balance=0){
    this.customerName = customername;
    this.accountNumber = Date.now();
    this.balance = balance;

}
BankAccount.prototype.deposit = function(amount){
    this.balance += amount 
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount
}

// const sahilAccount = new BankAccount("sahil", 1000)

// console.log(sahilAccount);



function CurrentAccount(customername, balance=0){

    BankAccount.call(this, customername, balance) // this is used to call the parent class constructor
    this.transactionLimit = 50000;
}


CurrentAccount.prototype = Object.create(BankAccount.prototype)
CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log("taking business loan" + amount);
}





function SavingsAccount(customername, balance=0){
    BankAccount.call(this, customername, balance) // this is used to call the parent class constructor
    this.transactionLimit = 50000;
}
SavingsAccount.prototype = Object.create(BankAccount.prototype)
SavingsAccount.prototype.takeBusinessLoan = function(amount){
    console.log("taking business loan" + amount);
}


const sahilCurrentAccount = new SavingsAccount("sahil", 1000)
sahilCurrentAccount.deposit(1000)

sahilCurrentAccount.withdraw(500)
sahilCurrentAccount.takeBusinessLoan(10000)



console.log(sahilCurrentAccount);
