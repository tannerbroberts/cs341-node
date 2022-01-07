const person = {
    name: 'Max',
    age: 29,
    
    // Object method syntax
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();