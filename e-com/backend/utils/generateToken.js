import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
const token = jwt.sign({userId},"secret",{ expiresIn: "30d" });

// Set JWT AS HTTP ONLY

    res.cookie("jwt", token, {
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge:30 * 24 * 60 * 60 * 1000
    })
}

export default generateToken;