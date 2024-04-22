import express from "express"
import mongoose from "mongoose"

const app = express()

try{
    const conn = await mongoose.connect('mongodb://localhost:27017/deployServer')
    console.log("Your server has been successfully connect your DataBase")
}catch(err){
    console.log("Failed! not connect mongodb " + err.message)
}

app.get("/" , (req,res)=>{
    res.send("Hello Express!")
})

let Port = process.env.PORT ||  4000


app.listen(Port , ()=>{
    console.log("Your Server has been started at Port " + Port)
})