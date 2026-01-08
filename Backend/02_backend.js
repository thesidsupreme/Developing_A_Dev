const http = require("http");

const server = http.createServer((request, response) => {
    console.log(request.url, request.method, request.headers);
    if(request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>This is the main page</title><head>');
        response.write('<body><h1>Enter Your Details</h1>');
        response.write('<form action="/submit" method="POST">');
        response.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        response.write('<label for="gender">Choose your gender:</label><br>');
        response.write('<label for="male">Male</label>');
        response.write('<input type="radio" id="male" name="gender" value="male"><br>');
        response.write('<label for="female">Female</label>');
        response.write('<input type="radio" id="female" name="gender" value="female"><br>');
        response.write('<button type="submit">Submit</button>');
        response.write('</form>'); 
        response.write('</body>')
        response.write('</html>');
        return response.end();

    }else if(request.url === "/submit" && request.method === "POST") {
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

