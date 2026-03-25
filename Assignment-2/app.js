import express from "express";
import bodyParser from "body-parser";

import usersRoute from "./routes/users.js";
import homeRoute from "./routes/main.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(usersRoute);
app.use(homeRoute);

app.listen(3000, "localhost");
