

// What is Closure?
// A closure is when a function "remembers" and can access variables from its outer scope
// even after the outer function has finished executing.

// In the code below:
// 1. We have an outer function 'main' that has a variable 'name'
// 2. Inside main, we have an inner function 'sayMyName'
// 3. 'sayMyName' can access the 'name' variable from its parent scope (main function)
// 4. This creates a closure - sayMyName "closes over" the variable 'name'
// 5. Even if main finishes executing, sayMyName would still remember 'name'

// This is useful for:
// - Data privacy (creating private variables)
// - Maintaining state between function calls
// - Creating function factories



function main(){

    const name = 'Sahil';

    function sayMyName(){

        console.log(name);
        
    }

    sayMyName();
}

main();




function adder(num){
    function add(b){
        console.log(num + b);
        
    }

    return add; 
}


const addto5 = adder(5);

addto5(10);



