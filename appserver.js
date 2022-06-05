// application server = module/method http-node 

const http = require('http')

const server = http.createServer((req , res)=>{
// res.end('welcome to vs code');

if(req.url === '/'){
    res.end('welcome to my home page');
}
else if(req.url === '/about'){
    res.end('welcome to about page');
}
else if (req.url === '/contactus'){
    res.end('8562805153')
}

else{
    res.end('page not found');
}

})

server.listen(5000);