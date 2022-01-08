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
const fs = require('fs');

// Create the server with the listener function defined as ananonamous function
//*****************************************************************************
const server = http.createServer((req, res) => {
    console.log('Request URL: ', req.url, 'Request method: ', req.method);
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type ="submit">Send</button></form></body>')
        res.write('</html>');
        // make sure to use keyword return because this is all we want to do
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            fs.writeFileSync('message.txt', 'DUMMY');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    // This happens in the case no if statements were executed
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
