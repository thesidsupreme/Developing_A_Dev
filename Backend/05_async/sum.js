const sumRequestHandler = (req, res) => {
    console.log("1. In Sum Request Handler", req.url);
    const body = []
    let result
    req.on('data', chunk => 
        { body.push(chunk) 
            console.log("2. chunk came sid")
        }
    );
    req.on('end', () => {
        console.log("3: end came ")
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        result = Number(bodyObj.First) + Number(bodyObj.Second);
        console.log(result);

    })

    res.setHeader('Content-Type', 'text/html')
    res.write(
        `
            <html>
            <head>
            <title>sum</title>
            </head>
            <body>
            <h1> your sum is ${result} </h1>
            </body>
            </html>

            `

    );
    console.log("4: checking async")
    return res.end();
}

exports.sumRequestHandler = sumRequestHandler;