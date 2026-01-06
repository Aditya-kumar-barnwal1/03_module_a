const mongoose=require('mongoose');

const connectDB=async ()=>{
    await mongoose.connect(MONGODB_URI);
    console.log("mongodb is connected");
}

module.exports=connectDB;
