// core module

const express = require('express')// external modules


// local module
const app = express();

app.use("/",(req, res, next) => {
  console.log("This is the first middleware", req.url, req.method)
  res.send("<h1>This is the home page</h1>")
  
  next()
}
);

app.use("/submit",(req, res, next) => {
  console.log("This is the second middleware", req.url, req.method)
  res.send(`<html>
  <head>
    <title>Calculator</title>
  </head>
  <body>
    <h1>Calculator</h1>
    <form action="/calculate-result" method="POST">
        <input type="text" placeholder="FirstNUM" name="First"/>
        <input type="text" placeholder="SecondNUM" name="Second"/>
        <input type="submit" value="Sum">
    </form>
  </body>
  </html>
  `)
}
);




const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})