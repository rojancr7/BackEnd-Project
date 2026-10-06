import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";


 cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret

 })

 const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath){
            return null
        }
        else{
           const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })

        }

        console.log("File is uploaded on cloudinary ",
        response.url);
            return response;
    }
    catch (error){
        fs.unlinkSync(localFilePath) // remove the locallysaved temporly file as tje upload operation gott faild

        return null;

    }
 }

 export {uploadOnCloudinary}