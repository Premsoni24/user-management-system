const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.createUser = async (req, res) => {
    try {
        const { name,email,password, role } = req.body;
        // check existing user
        const existingUser = await User.findOne({ email});
        if(existingUser){
            return res.status(400).json({msg: "User already exists"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.json({
            msg: "User created",
            user:{
                id: user._id,
                name: user.name,
                role: user.role
            }
        });
        
    }catch (error) {
        res.status(500).json({msg: "Server error"});
    }
};

exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.find().select("-password");
         res.json(users);

    }catch (error) {
        res.status(500).json({msg: "Server error"});
    }
}

exports.updateUser = async (req,res)=>{
    try{
        const { id } = req.params;
        const {name,role} = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            {name,role},
            {new: true}
        ).select("-password");

        if(!user){
            return res.status(404).json({msg: "User not found"});
        }
        res.json(user);
        
    }catch (error){
        res.status(500).json({msg: "Server error"});
    }
}

exports.deleteUser = async (req,res)=>{
    try{
        const { id} = req.params;
        const user = await User.findByIdAndDelete(
            id,
            {status: "inactive"},
            {new: true}
        );
        if(!user){
            return res.status(404).json({msg: "User not found"});
        }
        res.json({msg: "User deactivated successfully"});
    }catch (error){
        res.status(500).json({msg: "Server error"});
    }

};