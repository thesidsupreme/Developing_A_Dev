
const fs = require("fs");

const userRequestHandler = (request, response) => {


    console.log(request.url, request.method);
    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>This is the main page</title><head>');
        response.write('<body><h1>Enter Your Details</h1>');
        response.write('<form action="/submit-details" method="POST">');
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

    } else if (request.url === "/submit-details" && request.method === "POST") {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);

        })
        request.on('end', () => {
          const fullbody = Buffer.concat(body).toString();
          console.log(fullbody);
          const params = new URLSearchParams(fullbody);
        //   const bodyObject = {};
        //   for(const [key, val] of params.entries()){
        //     bodyObject[key] = val; 
        //   }
        const bodyObject = Object.fromEntries(params)
        console.log(bodyObject);
        fs.writeFileSync('user.txt', JSON.stringify(bodyObject))
        }
        )
        response.statusCode = 302;
        response.setHeader('Location', '/');
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title></title><head>');
    response.write('<body><h1>404 </h1></body>');
    response.write('</html>');
    response.end();
}




module.exports = userRequestHandler;