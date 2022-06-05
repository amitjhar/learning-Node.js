const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.end('i am amit jangid')
    }
    else if (req.url === '/about') {
        res.setHeader('Content-Type', "image/png")
        res.end(JSON.stringify({
            "name": "Himanshu",
            "age": 19
        }))
    }
})


server.listen(5000);