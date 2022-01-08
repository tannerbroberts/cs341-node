//*****************************************************************************
// Creating a Node server
//*****************************************************************************

// Note: These are core node modules
// http, https, fs, path, os

// http: launch a server, send requests
// https: launch an SSL server (Secure Shell)

// Imports
//*****************************************************************************
const http = require('http'); // auto-adds .js at the end
const routes = require('./routes'); // auto-adds .js for local paths as well

// Create the server with the listener function defined as ananonamous function
//*****************************************************************************
const server = http.createServer(routes.handler);

// Tells the newly created server to listen, and the information it needs to listen
server.listen(5000);

// Note: The event loop never closes unless there are no registered listeners
// Note: process.exit() quits the server hard exits, like break from a for loop 