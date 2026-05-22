const EventEmitter = require("events");

const myEmitter = new EventEmitter();
const http = require("http");

class Sale extends EventEmitter {
    constructor() {
        super();
    }
}

// observer
myEmitter.on("newSale", () => {
    console.log("THere was a new sale");
});
myEmitter.on("newSale", () => {
    console.log("Csutomer Nmae: Lovnimesh");
});

myEmitter.on("newSale", (stock) => {
    console.log(`There are now ${stock} items are left in stock`);
});

// emitter
myEmitter.emit("newSale", 9);

//////////////////////////////////////////////////////////////////
const server = http.createServer();
server.on("request", (req, res) => {
    console.log("Request recieved");
    res.end("Request recieved");
});

server.on("Request", (req, res) => {
    console.log("another request");
});

server.on("close", () => {
    console.log("sevrer closed");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("waiting for request....");
});
