const fs = require("fs");

// reading the data from a large file and sending to the client
const server = require("http").createServer();

server.on("request", (req, res) => {
    // solution 1

    fs.readFile("test-file.txt", (err, data) => {
        if (err) console.error(err);
        res.end(data);
    });
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening.........");
});
