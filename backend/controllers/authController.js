const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.login = async (req,res)=>{
    try {
      const {email,password} = req.body;

      const user = await User.findOne({ email });
      if( !user ){
          return res.status(404).json({ msg: "User not found" });
      }

      const isMatch = await bcrypt.compare(password,user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
     const token = jwt.sign(
        {id: user._id, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
     );
     res.json({
        token,
        user:{
            id: user._id,
            name: user.name,
            role: user.role
        }
     });
    } catch(error){
        console.error(error);
        res.status(500).json({msg : "Server Error" });
    }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const bcrypt = require("bcryptjs");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user"
    });

    res.json({ msg: "User registered" });

  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
};