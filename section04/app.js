// Note: npm install <package> --save-dev downloads and installs into a single project but only for development purposes

const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);