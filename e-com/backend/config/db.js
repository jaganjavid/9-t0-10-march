// mongodb+srv://jagan:12345@e-com.xc1dv74.mongodb.net/

import mongoose from "mongoose";

const connectDB = async () => {
    try{

        const con = await mongoose.connect("mongodb+srv://jagan:12345@e-com.xc1dv74.mongodb.net/e-com");

        console.log("DB Connected");

    }catch(err){

        console.log(`Error - ${err.message}`);
        process.exit(1);

    }

}

export default connectDB;