import { createServer } from "http";
import handleRequest from "./route.js";

const server = createServer(handleRequest);

server.listen(3001, "localhost");
