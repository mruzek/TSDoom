const http = require('http');
const fs = require('fs');
// const URL = require('url');
const server = http.createServer();
const host = "localhost";
const port = 1337;

// const indexPage = new URL('file:///../../../dist/index.html');
const indexPage = './dist/index.html';
file = fs.readFileSync(indexPage);

server.on('request', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();

        // response.write('ok ok ok ok ok ok');
        // response.write(body);
        response.write(file);

        response.end();
        response.on('error', (err) => {
            console.error(err);
        });

    });
    request.on('error', (err) => {
        console.error(err);
    });
});

server.listen(port, host, () => console.log('TSD Server online:', 'http://' + host + ':' + port));
