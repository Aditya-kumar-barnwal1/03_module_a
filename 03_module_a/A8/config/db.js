const mongoose=require('mongoose');

const connectDB=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/users');
    console.log("mongodb is connected");
}

module.exports=connectDB;