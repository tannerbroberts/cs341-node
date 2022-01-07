const person = {
    name: 'Max',
    age: 29,
    
    // Object method syntax
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

// Object destructuring function definition
const printName = ({ name, age }) => {
    console.log(name);
};

printName(person);

// More object destructuring
const { name, age } = person;

console.log('destructuring: ', name, age);

// Arrays aren't typed
const hobbies = ['Sports', 'Cooking'];

// Array destructuring, you can choose any names you want, because they are pulled out sequentially
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);