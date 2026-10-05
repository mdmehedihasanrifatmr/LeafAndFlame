import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    table_number:{
        type:Number,
        required:true,
    },
    capacity:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        trim:true,
    },
    status:{
        type:String,
        enum:["available","occupied","reserved","maintainace"],
        default:"available"
    }
})

const Table = mongoose.model("Table",tableSchema);

export default Table;