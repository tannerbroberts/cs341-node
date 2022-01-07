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

// Const doesn't mean you can't change the array, it means you can't change what the pointer points to
hobbies.push('Programming');
console.log(hobbies);

// Spread, (syntax: <...array/object>) helps immutability ideology
// works for arrays as well as objects
// pulls out the 'guts' of stuff (arrays, objects) and returns it... sort-of
const coppiedArray = [...hobbies];
console.log(coppiedArray);

// Rest opperator <...variableName>
// specifies any number of arguments that are passed in as an array
const toArray = (...args) => {
    return args;
};

// Rest and Spread are the same syntax, but where you use it depends on what you call it.