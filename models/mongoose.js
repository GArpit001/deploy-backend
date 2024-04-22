import mongoose from "mongoose"

const backend = new mongoose.Schema({
    userName : String,
    name : String,
    email : String,
    password : String
  });
  
  
  
  export const deployServer = mongoose.model("deploy", backend)