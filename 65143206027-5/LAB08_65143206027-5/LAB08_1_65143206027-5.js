const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our homepage!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Here is our short history</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for</p>
            <a href="/">Back Home</a>
        `);
    }
});

const PORT = 5000;
server.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`));

