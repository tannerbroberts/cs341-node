//*****************************************************************************
// Creating a Node server
//*****************************************************************************

// Note: http, https, fs, path, os
// These are core node modules

// http: launch a server, send requests
// https: launch an SSL server

// Imports
//*****************************************************************************
const http = require('http'); // auto-adds .js at the end

// Create the server with the listener function defined as ananonamous function
//*****************************************************************************
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Pave</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
    res.write('</html>');
    // Can't write any more after this!!!
    res.end();
});

// Tells the newly creates server to listen, and the information it needs to listen
server.listen(5000);

// Note: The event loop never closes unless there are no registered listeners
// Note: process.exit() quits the server hard exits, like break from a for loop
