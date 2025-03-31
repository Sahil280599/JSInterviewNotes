//variable shadowing is when a variable in a higher scope has the same name as a variable in a lower scope.


let x = 10; 


function myFunction(){
     let x=20; 
     console.log(x);   // x = 20

     if(true){
        let x=30;
        console.log(x); // x = 30
     }

     console.log(x); // x = 20
     
}

myFunction();

console.log(x); // x = 10


