"use strict";
import express from "express";
import bodyParser from "body-parser";

const app = express();

import adminRoutes from "./routes/admin.js";
import frontRoutes from "./routes/shop.js";

app.use(bodyParser.urlencoded({ extended: false }));

// here order of routes matters if we are using the app.use() methods in routes but doesn't matters if we are using app.get() or app.post();

app.use("/admin", adminRoutes);
app.use(frontRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, "localhost");
