import express from "express";
import path from "path";

const router = express.Router();
export const products = [];

router.get("/add-product", (req, res, _next) => {
  res.sendFile(path.resolve("views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

export default router;
