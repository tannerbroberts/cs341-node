// Note: npm install <package> --save-dev downloads and installs into a single project but only for development purposes

// Node modules
const http = require('http');

// 3rd party packages
const express = require('express');

//*****************************************************************************

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!");
    next();
});
app.use((req, res, next) => {
    console.log("Int another middleware!");
    res.send('<he>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);