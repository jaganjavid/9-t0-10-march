


import express from "express";

import { getProducts, getProductsById } from "../controllers/productController.js";

const router = express.Router();


// desc Fecth all products
// route GET /api/products
// access Pubilc

router.route("/").get(getProducts);

// desc Fecth all product By Id
// route GET /api/products/:id
// access Pubilc

router.route("/:id").get(getProductsById);





export default router;
