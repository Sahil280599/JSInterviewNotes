// create an object using object literal


const person ={

    name : 'sahil', 
    age : 20, 
    city : 'abudhabi',
    greet : function(){
        console.log('Hello');
    }
}


// create an object using constructor function

function Person(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

const person1 = new Person('sahil',20,'abudhabi');

console.log(person1);



// add or remove properties from an object

person.gender = 'male';

delete person.city;




// check if a property exists in an object

console.log(person.hasOwnProperty("name"));







