//constructor function is a function that is used to create an object
// it is a blueprint for creating objects
// 


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

const sahilAccount = new BankAccount("sahil", 1000);
const smritiAccount = new BankAccount("smriti")
// console.log(sahilAccount, smritiAccount);

sahilAccount.deposit(1000)

sahilAccount.withdraw(500)

console.log(sahilAccount.balance);


// ==============================================

// DOM ELEMENTs

const accounts =[];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");


const depositForm = document.querySelector("#Deposit");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(customerName.value, balance.value);

    const account = new BankAccount(customerName.value, +balance.value)

    accounts.push(account);
    console.log(accounts)

  
})

depositForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const account = accounts.find((account)=> account.accountNumber === +accountNumber.value);
    if (account) {
        account.deposit(+amount.value);
        console.log(account);
    } else {
        console.log("Account not found");
    }
})

