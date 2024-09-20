import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";

// protect


const protect = asyncHandler(async (req, res, next) => {

    let token = req.cookies.jwt;

    console.log(token);

    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token");
    }

    try{
        const decoded = jwt.verify(token, "secret");
        // console.log(decoded);
        req.user = await User.findById(decoded.userId);
        console.log(req.user);
        next();
    }catch(err){
        res.status(401);
        throw new Error("Not authorized,token failed");
    }



})



// admin

const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error("Not auth ,as admin");
    }
}

export {protect, admin};