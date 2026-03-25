import express from "express";
import path from "path";

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
  res.sendFile(path.resolve("views", "home.html"));
});

export default homeRoute;
