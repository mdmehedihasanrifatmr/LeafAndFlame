import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    avatar:{
        type:String,
        trim:true,
    },
    role:{
        type:String,
        enum:["user","admin","chef","manager","waiter","cashier"],
        default:"user"
    }
},{
    timestamps:true,
})

const User = mongoose.model("User",userSchema);

export default User;