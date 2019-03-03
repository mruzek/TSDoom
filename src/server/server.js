const http = require('http');
const fs = require('fs');

const server = http.createServer();
const host = 'localhost';
const port = 1337;

const distPath = 'D:\\Dev\\TSDoom\\dist\\';

server.on('request', (req, res) => {
    let response;

    req.on('data', (chunk) => {

    });

    req.on('end', () => {
        if(req.url == '/'){
            response = fs.readFileSync(distPath + 'index.html');
        } else {
            response = fs.readFileSync(distPath + (req.url).substr(1));
        }

        //test
        if(req.url == '/A') {
            response = fs.readFileSync(distPath + (req.url).substr(1));
        }

        res.write(response);
        res.end( () => {
                console.log('qwe',req.url);
        });

        // read file from file system
        // fs.readFile(pathname, (err, data) => {
        //     res.write(data);
        //     res.end();
        //     res.on('error', (err) => {
        //         console.error(err);
        //     });
        //
        // });

    });

    req.on('error', (err) => {
        console.error(err);
    });
});

server.listen(port, host, () => console.log('TSD Server online:', 'http://' + host + ':' + port));
