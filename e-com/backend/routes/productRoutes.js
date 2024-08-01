
import express from "express";

import products from "../data/products.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.json(products);
})

router.get("/:id", (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

export default router;