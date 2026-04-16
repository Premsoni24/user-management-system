const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    role:{
        type:String,
        enum:["admin","manager","user"],
        default:"user"
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    updatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps: true});

const User = mongoose.model("User",userSchema);
module.exports = User;

