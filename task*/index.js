const http = require('http');
const url = require('url');
const {nthPrime} = require('./utils');

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true);

    if(pathname === '/primes') {
        const quantity = Number(query.n) || 0
        
        console.log(`Calculating the first ${quantity} primes...`);

        const result = nthPrime(quantity);
        
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(result));
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    } 
})

server.listen(8080);