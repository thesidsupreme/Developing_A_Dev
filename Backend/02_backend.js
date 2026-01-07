const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>This is the main page</title><head>');
        response.write('<body><h1>This is the main page Mr. sid supreme, </h1></body>');
        response.write('</html>');
        return response.end();

    } else if (request.url === "/products") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>My First Page</title><head>');
        response.write('<body><h1>This is the PRODUCT PAGE MR.SID </h1></body>');
        response.write('</html>');
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title></title><head>');
    response.write('<body><h1>404 </h1></body>');
    response.write('</html>');
    response.end();
})


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

