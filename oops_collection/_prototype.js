
// Notes on Prototypes in JavaScript:

// 1. What is a Prototype?
//    - Every object in JavaScript has a hidden property called prototype
//    - Think of it like a shared storage space for methods and properties
//    - Helps save memory by sharing methods between all objects

// 2. Why use Prototypes?
//    - Without prototypes, each object would need its own copy of methods
//    - With prototypes, all objects share one copy of the methods
//    - Makes code more efficient and uses less memory

// 3. How to use Prototypes:
//    - Add methods using Constructor.prototype.methodName
//    - Example: BankAccount.prototype.deposit = function(){}
//    - All objects created from BankAccount can now use deposit()

// 4. Prototype Chain:
//    - When you try to use a method, JavaScript:
//      1. Checks the object itself
//      2. If not found, checks its prototype
//      3. If still not found, checks prototype's prototype
//    - This is called the prototype chain

// 5. Benefits:
//    - More efficient code
//    - Saves memory
//    - Easy to add new methods to all existing objects


// to remove extra function in constructor function we use prototype

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

const sahilAccount = new BankAccount('Sahil')
// const smritiAccount = new BankAccount('smriti', 10000000)



// adding method to prototype 
BankAccount.prototype.deposit = function(amount){
    this.balance += amount 
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount
}


sahilAccount.deposit(1000)
sahilAccount.withdraw(500)

console.log(sahilAccount);


//prototype is an object that is used to add properties and methods to a constructor function it gives empty object to the constructor function

