
import express from "express";

import products from "./data/products.js";
import connectDB from "./config/db.js"

import cors from "cors";

const port = 5000;

connectDB(); // Connect to mongo DB

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/api/products", (req,res) => {
    res.json(products);
})

app.get("/api/products/:id", (req,res) => {

    // console.log(req);
    console.log(req.params);

    const product = products.find((p) => p._id === req.params.id);

    res.json(product);

})

app.listen(port, () => console.log(`My Server is running on port ${port}`));

