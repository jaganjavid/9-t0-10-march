
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";


// @desc Auth User
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req, res) => {
    res.send("auth send");
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