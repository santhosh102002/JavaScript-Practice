const http = require('http');
const PORT = 3032;
const hostname = 'localhost'
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify({"mentor":"santhosh kumar"}))
})

server.listen(PORT,()=>{
    console.log(`The server is runing at ${hostname}:${PORT}`)
})