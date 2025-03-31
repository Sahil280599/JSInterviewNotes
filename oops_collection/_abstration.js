function BankAccount(customername, balance=0){
    this.customerName = customername;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount; 
    }
    this.withdraw = function(amount){
        this.balance -= amount;
    }
}


let sahilAccount = new BankAccount("sahil", 1000);
sahilAccount.deposit(500);
console.log(sahilAccount.balance);

