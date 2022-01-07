const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

// Arrow functions don't have a bound 'this'
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
    );
};

// Single line arrow function syntax
const add = (a, b) => a + b;

// One argument, you can omit the parenthases around the variable
const add = a => a + b;

// No arguments, mandatory to include the empty parenthases
const add = () => a + b;

console.log(summarizeUser(name, age, hasHobbies));
