const http = require('http')
const server = http.createServer((req , res)=>{
    if(req.url === '/'){
        res.end('i am from jaipur how are you guys ');
    }
    else{
        res.end('i am not ready to doing my work');
    }
})
server.listen(6000);