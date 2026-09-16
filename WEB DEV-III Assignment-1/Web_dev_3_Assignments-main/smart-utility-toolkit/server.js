// radhe radhe 

const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url == "/") {
        response.end("Welcome Message")
    } else if (request.url == "/about") {
        response.end("About page ")
    } else if (request.url == "/contact") {
        response.end("Contact Page ")
    } else {
        response.end("404 Error Message")
    }
}); 


server.listen(3000, () => {
    console.log("server started...")
});