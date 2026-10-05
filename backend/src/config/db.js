import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected successfully.");
    }catch(err){
        console.log("Connection failed");
    }
}

export default connectDB;