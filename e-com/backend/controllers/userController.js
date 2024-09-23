
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";



// @desc Auth User
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async(req, res) => {
   
    const {email, password} = req.body;



    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){


        generateToken(res, user._id);


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

    const { name, email , password } = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exist");
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        // console.log(user);
        generateToken(res, user._id);

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })

    }else {
        res.status(400);
        throw new Error("Invalid user data")
    }
})

// @desc Logout User
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async(req, res) => {
    
    res.cookie("jwt", "", {
        httpOnly:true,
        expires: new Date(0)
    })

    res.status(200).json({message:"Logged out successfully"});
})


// @desc Get user profile
// @route GET /api/users/profile
// @access Public

const getUserProfile = asyncHandler(async(req, res) => {

    console.log(req.user);
    
    const user = await User.findById(req.user._id);

    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else {
        res.status(404);
        throw new Error("User not found");
    }

})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async(req, res) => {

    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }

        const updateUser = await user.save();


        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })

    }else {
        res.status(404);
        throw new Error("User not found");
    }

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