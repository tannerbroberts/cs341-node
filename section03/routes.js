const fs = require('fs');

const requestHandler = (req, res) => {
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
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
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
};

// For just a single function
// module.exports = requestHandler;

// shortcut supported by NodeJS
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';

module.exports = {
    // One single object
    handler: requestHandler,
    someText: 'Some hard coded text'
};