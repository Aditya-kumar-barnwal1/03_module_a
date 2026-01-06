const User=require('../models/userSchema.js');
const bcrypt=require('bcryptjs');
const register=async(req,res)=>{
    const {name,email,password,mobile}=req.body;
    if(!email || !name|| !password ||!mobile){
        return res.status(501).json({message:"All fields are required"});
    }
    if(password.length<6 || mobile.length!=10)
    {
        return res.status(501).json({message:"Mobile must be 10 chars and password minimum length is 6"});
    }
    const prevUser=await User.findOne({email:email});
    if(prevUser){
        return res.json({message:"User already exist"});
    }

    const hashed=await bcrypt.hash(password,10);
    const result=await User.insertOne({name:name,email:email,password:hashed,mobile:mobile});

    console.log(result);
    return res.status(200).json({message:"user created successfully"});
}
module.exports={register};