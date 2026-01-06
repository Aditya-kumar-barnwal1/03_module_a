const mongoose=require('mongoose');

const connectDB=async ()=>{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb is connected");
}

module.exports=connectDB;
