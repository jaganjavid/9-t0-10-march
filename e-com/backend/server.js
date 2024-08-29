import express, { urlencoded } from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import cors from "cors";

import { notFound ,errorHandler} from "./middleware/errorMiddler.js";

const port = 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Use custom middleware
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}`));
