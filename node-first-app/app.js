"use strict";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

import adminRoutes from "./routes/admin.js";
import frontRoutes from "./routes/shop.js";

app.use(bodyParser.urlencoded({ extended: false }));

// here order of routes matters if we are using the app.use() methods in routes but doesn't matters if we are using app.get() or app.post();

app.use("/admin", adminRoutes);
app.use(frontRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.resolve("views", "error.html"));
});

app.listen(3000, "localhost");
