// Crutial concept!!!

// Async code (returns a promise)
const fetchData = () => {
    // When resolved, this new promise will wait 1.5 sec., then call the 'resolve' callback function passed in as the first parameter
    // Promises typically have much more complicated logic that determines weather or not they call the resolve or reject methods
    const promise = new Promise((resolve, reject) => {
        // calling fetchData() creates and returns this promise (runs this code)
        // This code waits for 1.5 sec, then calls resolve, but it doesn't wait 1.5 seconds to return, it does that immediately.
        setTimeout(() => {
            resolve('fetchDate() promise Done!');
        }, 500);
    });
    // This happens pretty close to immediately.
    return promise;
}

// This gets called when we run our file
// It waits 1.5 seconds to log 'First timer is done!'
// It then calls fetchData(), which runs, and returns a promise
setTimeout(() => {
    console.log('First timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
            return fetchData();
        })
        .then(text3 => {
            console.log(text3);
        });
}, 1500);

// Synchronous code
console.log('Non-async code!');