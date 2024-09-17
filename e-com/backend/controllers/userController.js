
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";


// @desc Auth User
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req, res) => {


    // res.send("auth user");
   
    const {email, password} = req.body;


    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){


       const token = jwt.sign({userId:user._id},"secret",{ expiresIn: "30d" });

       // Set JWT AS HTTP ONLY

       res.cookie("jwt", token, {
           httpOnly:true,
           secure:false,
           sameSite:"strict",
           maxAge:30 * 24 * 60 * 60 * 1000
       })


        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    


})

// @desc Register User token
// @route POST /api/users/register
// @access Public

const registerUser = asyncHandler(async(req, res) => {
    res.send("register send");
})

// @desc Logout User
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async(req, res) => {
    res.send("Logout user");
})


// @desc Get user profile
// @route GET /api/users/profile
// @access Public

const getUserProfile = asyncHandler(async(req, res) => {
    res.send("get user profile");
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async(req, res) => {
    res.send("update user profile");
})

// @desc Get user
// @route Get /api/users
// @access Private/admin

const getUsers = asyncHandler(async(req, res) => {
    res.send("Get all users");
})

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/admin

const getUserByID = asyncHandler(async(req, res) => {
    res.send("Get user by ID");
})

// @desc Delete user
// @route POST /api/users/:id
// @access Private/admin

const deleteUser = asyncHandler(async(req, res) => {
    res.send("Delete users");
})

// @desc Update user
// @route PUT /api/users/:id
// @access Private/admin

const updateUser = asyncHandler(async(req, res) => {
    res.send("Update users");
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
}