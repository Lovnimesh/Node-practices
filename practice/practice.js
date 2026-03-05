import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();

app.use("/", (req, res, next) => {
  res.send("Hey, Am I correct?");
});

app.listen(3001, "localhost");
