const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const register = async (req, res) =>{
    try {
        const {username, email, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username, email, password : hashedPassword, role});
        await newUser.save();
        res.status(201).json({message: `User is registered with username : ${username}.`, success : true});
    } catch (error) {
        res.status(500).json({message: `something went wront..`, success : false});
    }
}

const login = async (req, res) =>{
    try {
        const {username, password} = req.body; 
        const user = await User.findOne({username})
        // console.log(user)
        if(!user){
            res.status(404).json({message: `User with ${username} not found.`, success : false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message : "Invalid credential", success : false});
        }
        const token = jwt.sign(
            {id:user._id, email : user.email, role:user.role},
            process.env.JWT_SECREAT,
            {expiresIn: "24h"}
        )
        res.status(200).json({
            token,
            message : "Login successfully...",
            success : true,
            email: user.email,
            username
        });
    } 
    catch (error) {
        res.status(500).json({message: `something went wront..`, success : false});

    }
}

module.exports = {
    register,
    login,
};