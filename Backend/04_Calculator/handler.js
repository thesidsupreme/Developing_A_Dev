const {sumRequestHandler} = require('./sum')
const requestHandler = (req, res) => {
    console.log(req.url, req.method)
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(
            `
            <html>
            <head>
            <title>Calculator</title>
            </head>
            <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go To Calculator</a>
            </body>
            </html>

            `
        );
        return res.end();
    } else if (req.url.toLowerCase() === ('/calculator')) {
        res.setHeader('Content-Type', 'text/html')
        res.write(
            `
            <html>
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

            `
        );
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write(
        `
            <html>
            <head>
            <title>Calculator</title>
            </head>
            <body>
            <h1>404 Page Dont exist</h1>
            <a href="/">Go To Home Please</a>
            </body>
            </html>

            `
    );
    return res.end();
}

exports.requestHandler = requestHandler;