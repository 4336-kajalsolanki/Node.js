const http = require('http');
const port = 9000;
const fs = require('fs');
const RequestHandler = (req, res) => {
    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = "./index.html"
            break;
        case '/about':
            fileName = "./about.html"
            break;
        case '/con':
            fileName = "./contact.html"
            break;
        case '/home':
            fileName = "./home.html"
            break;
        case '/pro' :
            fileName = "./product.html"
            break;   
        default:
            fileName = "./404.html"
    }
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
            return false;
        }
        res.end(data);
    })
}
const server = http.createServer(RequestHandler);
server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server Is Run :- ${port} `);

})