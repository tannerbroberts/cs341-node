//*****************************************************************************
// Creating a Node server
//*****************************************************************************

// Imports
//*****************************************************************************
// Needed to create the server
const http = require('http'); // auto-adds .js at the end
// Routing logic for the server
const routes = require('./routes'); // auto-adds .js for local paths as well

// Spin up the server, which executes the routes file as it's main event listener
const server = http.createServer(routes);

// Listen on port 5000
server.listen(5000);