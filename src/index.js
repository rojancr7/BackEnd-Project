
// require('dot-env').config({path: '../env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
import connectDB from "./db/index.js";
import { Error } from "mongoose";




dotenv.config({
    path: './.env',
    
})
connectDB()
.then( () => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(` Server is running at port : ${process.env.PORT}`)
    })

})
.catch((Error) => {
    console.log("MongoDB connection Faild!!", Error);
})





/*
import express from "express";
const app = express();

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })
app.listen(process.env.PORT, () =>{
    console.log(`App is Listining on PORT ${process.env.PORT}`);
})

    } catch(error){
        console.log("Error:", error);
        throw error
    }

})()
*/