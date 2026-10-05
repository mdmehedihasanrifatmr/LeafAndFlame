import express from "express";

import userRoutes from "./routes/userRoutes.js";

import { PORT } from "./config/config.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    res.json({message:"Home page"})
})



connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
