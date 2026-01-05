const http = require("http");
 
// function requestListner(request,response){
//     console.log(request)
// }


// http.createServer(requestListner);

const server = http.createServer(function(request,response){
    console.log(request)
    process.exit()
})


const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`)
}
)