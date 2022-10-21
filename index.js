const http = require('http');
const port = 8080;

const server = http.createServer( (req, res) => {
    res.end("Hello Vitali nodejs server");
});

server.listen(port, () => {
    console.log(`Server listening on: localhost:${port} ...`);
});