// application server = module/method http-node 

const http = require('http')
const fs = require('fs')
const homehtml= fs.readFileSync('./home.html')
const style = fs.readFileSync('./style.css')
const img = fs.readFileSync('./allu-arjun.jpg')
// console.log(homehtml)


const server = http.createServer((req , res)=>{
// res.end('welcome to vs code');

if(req.url === '/'){
    res.write(homehtml);
    res.end();
}
else if(req.url === '/about'){
    res.end('welcome to about page');
}
else if (req.url === '/contactus'){
    res.end('8209196140')
}
else if (req.url === '/style.css'){
    res.write(style);
    res.end();
}
else if (req.url=== '/allu-arjun.jpg'){
    res.write(img);
    res.end();
}

else{
    res.end('page not found');
}

})

server.listen(5000);
