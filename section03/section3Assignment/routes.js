const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>');
        res.write('Welcome to my Assignment page!');
        res.write('</h1>');

        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');

        res.write('<button type="submit">Create User</button>');
        res.write('</form>');

        res.write('</html>');
        // Very important to return
        return res.end();

    } else if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<ul>');
        res.write('<li>');
        res.write('User 1')
        res.write('</li>');

        res.write('<li>');
        res.write('User 2')
        res.write('</li>');

        res.write('<li>');
        res.write('User 3')
        res.write('</li>');

        res.write('<li>');
        res.write('User 4')
        res.write('</li>');

        res.write('</ul>');

        res.write('</html>');
        return res.end();

    } else if(url === '/create-user' && method) {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);

            // Redirect
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
    else {
        // User is trying to use the wrong endpoint/url
    }
    

};

module.exports = requestHandler;