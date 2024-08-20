const http = require('http')
const fs = require('fs')

const url = require('url');

const myServer = http.createServer((req, res)=> {
    if(req.url === '/favicon.ico') return res.end()

    const myurl = url.parse(req.url, true); 
    const log = `${Date.now()} ${req.url}: New Request received\n`;
    console.log(myurl);
    
    fs.appendFile('log.txt', log, (err,data)=> {
        switch(req.url){
            case '/':res.end('Home page')
            break
            case '/about': res.end('I am Asif Ahmad')
            break
            default:  res.end('404 not found');
            break
        }
        
    })
});

myServer.listen(8000, ()=> console.log('Server Started '))

