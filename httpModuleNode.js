const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write("<h1>Hello Node.js!!!</h1>")
    }
    if(req.url == '/about'){
        res.write("<h1>This is about</h1>")
    }
    res.end()
})

server.listen(5005);
console.log('The server is running on 5005')