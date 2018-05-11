// Modules
const http = require("http");

// Create HTTP Server
http.createServer((request, response) => {

    // Enable CORS
    response.setHeader("Access-Control-Allow-Origin", "*");

    // Get request vars
    const {url, method} = request;

    // Subscribe
    if(method === "POST" && url.match(/^\/subscribe\/?/)) {

        // Get POST Body
        let body = [];

        // Read body stream
        request.on("data", chunk => body.push(chunk)).on("end", () => {

            response.end("Subscribed");
        });

    // Public Key
    } else if (url.match(/^\/key\/?/)) {

        response.end("public key");
    }

// Start the server
}).listen(3333, () => console.log("Server Running"));
