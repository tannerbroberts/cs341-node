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
    console.log(req);
});

// Tells the newly creates server to listen, and the information it needs to listen
server.listen(5000);