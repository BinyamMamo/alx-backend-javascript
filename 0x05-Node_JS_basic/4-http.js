/**
 * Creates an HTTP server that listens on the specified port
 * and responds with the message "Hello Holberton School!".
 *
 * @module 4-http
 * @exports app - The HTTP server instance.
 */
const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
