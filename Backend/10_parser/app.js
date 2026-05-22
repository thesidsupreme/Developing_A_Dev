const express = require('express');
const bodyParser = require('body-parser');

const app = express();  
const PORT = 3000;

app.use((req, res, next) =>{
  console.log("This is first Dummy Middleware", req.url, req.method);
  next();
})

app.use((req, res, next) =>{
  console.log("This is Second Dummy Middleware", req.url, req.method);
  next();
})
// app.use((req, res, next) =>{
//   console.log("This is Third Dummy Middleware", req.url, req.method);
//   res.send("<h1>The IS fucking supreme</h1>")
//   next();
// })

app.get("/", (req, res, next) =>{
  console.log("Handling / For Get", req.url, req.method)
  res.send("<h1>this is sid supreme<h1>")
})

app.get("/contact-us", (req, res, next) =>{
  console.log("Handling /contact-us For Get", req.url, req.method)
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Contact Form</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-container {
      background: white;
      padding: 25px;
      width: 350px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    .form-container h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }

    .form-group textarea {
      resize: none;
      height: 80px;
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>

<body>

  <div class="form-container">
    <h2>Contact Form</h2>

    <form action="submit.php" method="POST">

      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="fullname" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required>
      </div>

      <div class="form-group">
        <label for="address">Address</label>
        <textarea id="address" name="address" required></textarea>
      </div>

      <button type="submit">Submit</button>

    </form>
  </div>

</body>
</html>`)
})



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
}
)