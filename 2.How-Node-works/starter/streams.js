const fs = require("fs");

// reading the data from a large file and sending to the client
const server = require("http").createServer();

server.on("request", (req, res) => {
    // // solution 1
    // fs.readFile("test-file.txt", (err, data) => {
    //     if (err) console.error(err);
    //     res.end(data);
    // });
    // // with this solution the first entire file is loaded to the memory then data will be sent

    // solution 2: Streams
    // const readble = fs.createReadStream("test-file.txt");
    // readble.on("data", (chunk) => res.write(chunk));
    // // when no more data is left to read;
    // readble.on("end", () => {
    //     res.end();
    // });
    // readble.on("error", (err) => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not found");
    // });

    // solution 3
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    // readableSource.pip(writeableDest);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening.........");
});
