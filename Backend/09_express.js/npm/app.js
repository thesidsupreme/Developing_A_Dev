const http = require('http')// core module

const express = require('express')// external modules


const userRequestHandler = require("./user")// local module

const app = express();

const server = http.createServer(app)


const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})