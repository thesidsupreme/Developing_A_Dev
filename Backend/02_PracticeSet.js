const http = require('http')


const server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    if(request.url==='/home'){
        response.write('<h1>Welcome to home</h1>')
    }else if(request.url==='men'){
        response.write('<h1>Welcome to men</h1>')
    }  else if(request.url==='women'){
        response.write('<h1>Welcome to women</h1>')
    }  else if(request.url==='kids'){
        response.write('<h1>Welcome to kids</h1>')
    }  else if(request.url==='cart'){
        response.write('<h1>Welcome to cart</h1>')
    }   else{
         response.write(`
            <html>
            <head>
    <title>Myntra Practice Set</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </body>
            </html>`);
    }

   
    response.end();
})

server.listen(3001, () => {
    console.log(`server is running on http://localhost:3001`)
}
)