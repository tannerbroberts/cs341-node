const person = {
    name: 'Max',
    age: 29,
    
    // Object method syntax
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

// Arrays aren't typed
const hobbies = ['Sports', 'Cooking'];

// For of syntax
for (let hobby of hobbies) {
    console.log(hobby);
}

// Array map function
let mappedHobbies = hobbies.map(hobby => 'Hobby ' + hobby);

console.log(mappedHobbies);