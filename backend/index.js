import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";


const app=express();  
app.use(bodyParser.json());
app.use(cors({
    origin:"http://localhost:3000", 
    credentials: true,  
}));
dotenv.config();

const PORT=process.env.PORT|| 5001;
const URL=process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connect successfully");

app.use("/api",route);

app.listen(PORT,()=>{
    console.log(`server is running on port :${PORT}`);
})

}).catch(error => console.error(error));

