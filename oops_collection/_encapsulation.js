class BankAccount{

    customerName;
    accountNumber;
    #balance = 0; // this is a private variable

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.#balance += amount;
    }


    withdraw(amount){
        this.#balance -= amount; 
    }

    setBalance(amount){
        if(isNaN(amount)) throw new Error("Amount is not a number");
        this.#balance = amount;
    }

    getBalance(){
        return this.#balance;
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


const sahilAccount = new CurrentAccount("sahil", 1000)
console.log(sahilAccount.balance);

// console.log(sahilAccount.balance = 500);
