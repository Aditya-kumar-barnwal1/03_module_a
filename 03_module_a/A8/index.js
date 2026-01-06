const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const app=express();
const connectDB=require('./config/db.js')
const {register}=require('./controllers/userRegister.js')
app.use(express.json());
app.use(cors())

connectDB();
const PORT=process.env.PORT||5000;

app.post('/api/users',register);

app.listen(PORT,()=>{
    console.log(`App listens at PORT ${PORT}`)
})