const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received for: ${req.url}`);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to our homepage</h1>')
        return;
    }

    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>This is our short history</h1>');
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>404 Not Found</h1>
        <p>We can't seem to fine the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));