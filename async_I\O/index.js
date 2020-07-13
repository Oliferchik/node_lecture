const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        fs.readFile(`${__dirname}/home.html`, (err, content) => {
            if(!err) {
                res.setHeader('Content-Type', 'text/html');
                res.write(content);
            } else {
                res.statusCode = 500;
                res.write('An error has ocurred');
            }

            res.end();
        })
    } else {
        res.write('Hello World');
        res.end();
    }
})

server.listen(8080);