
import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/products.js";

import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {

    try{

        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUser = await User.insertMany(users);

        const sampleProduct = await Product.insertMany(products);

        console.log("Date Imported");

        process.exit();

    }catch(error){
        console.log(error);
        process.exit(1);
    }

}

const destroyData = async () => {

    try{

        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed");
        process.exit();
    } catch(error){
        console.log(err);
        process.exit(1);
    }

}

if(process.argv[2] === "-d"){
    destroyData();
} else {
    importData();
}