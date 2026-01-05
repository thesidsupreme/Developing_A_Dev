const http = require("http");

const server = http.createServer((request, response)=>{
    console.log(request.url, request.method, request.headers)
})


const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

