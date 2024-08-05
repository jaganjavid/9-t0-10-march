
import express from "express";


import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js";

import cors from "cors";

const port = 5000;

connectDB(); // Connect to mongo DB

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.use("/api/products", productRoutes);


app.listen(port, () => console.log(`My Server is running on port ${port}`));

