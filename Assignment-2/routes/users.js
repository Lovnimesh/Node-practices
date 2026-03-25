import express from "express";
import path from "path";

const usersRoute = express.Router();

usersRoute.get("/users", (req, res, next) => {
  res.sendFile(path.resolve("views", "users.html"));
});

usersRoute.post("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/users");
});

export default usersRoute;
