import User from "../models/Users.js";
import { hashPassword } from "../utils/password.js";

export const createUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            res.status(409).json({
                message:"User already exist."
            })
        }

        const hashpass = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password:hashpass,
        });

        res.status(201).json({message:"User created successfully",user});
        
    }catch(err){
        res.status(500).json({
            message:"Failed to create user",
        })
    }
}