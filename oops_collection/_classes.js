// Notes for Classes in JavaScript:

// 1. Class Basics:
//    - Class is a blueprint/template for creating objects
//    - Uses 'class' keyword followed by class name
//    - More modern syntax compared to constructor functions

// 2. Class Properties:
//    - Declared at top of class (customerName, accountNumber, balance)
//    - Can have default values (balance = 0)

// 3. Constructor:
//    - Special method that runs when object is created
//    - Takes parameters and initializes properties
//    - Uses 'this' keyword to refer to current instance

// 4. Methods:
//    - Functions defined inside class
//    - No 'function' keyword needed
//    - Automatically added to prototype
//    - Example: deposit(), withdraw()

// 5. Creating Objects:
//    - Use 'new' keyword with class name
//    - Example: new BankAccount('name', amount)

// 6. Key Differences from Constructor Functions:
//    - Cleaner syntax
//    - Built-in prototype handling
//    - Must use 'new' keyword



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


const sahilAccount = new BankAccount('sahil')


sahilAccount.deposit(1000)
sahilAccount.withdraw(500)

console.log(sahilAccount);

const smritiAccount = new BankAccount('smriti', 1000)

smritiAccount.deposit(1000)
smritiAccount.withdraw(500)

console.log(smritiAccount);


//hoisting is not possible in classes but normally works in functions
hello()
function hello(){
    console.log("Hello");

}


// const hell0 (){

// }




