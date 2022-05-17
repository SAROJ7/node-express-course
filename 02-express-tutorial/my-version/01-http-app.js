const http = require('http');
const { readFileSync, read } = require('fs');
let i = 0;

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer((req, res) => {
    
    const url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.write(homePage);    
        res.end();
        console.log(i);
        i++;
    } else if (url === '/styles.css') {
         res.writeHead(200, {
            'Content-Type': 'text/css',
        })
        res.write(homeStyle);    
        res.end();
    } else if (url === '/logo.svg') {
         res.writeHead(200, {
            'Content-Type': 'image/svg+xml',
        })
        res.write(homeImage);    
        res.end();
    } else if (url === '/browser-app.js') {
         res.writeHead(200, {
            'Content-Type': 'text/js',
        })
        res.write(homeLogic);    
        res.end();
    }  else if (url === '/about') {
         res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.write(`<h1>About Page</h1>`);    
        res.end();
    } else {
         res.writeHead(404, {
            'Content-Type': 'text/html',
        })
        res.write(`<h1>404 Page not Found</h1>`);    
        res.end();
    }
});

server.listen(5000);