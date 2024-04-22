import express from "express"
import mongoose from "mongoose"


const app = express()

try{
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/deployServer')
    console.log("Your server has been successfully connect your DataBase")
}catch(err){
    console.log("Failed! not connect mongodb " + err.message)
}

app.get("/" , (req,res)=>{
    res.send("Hello Express!")
})

app.post("/" , (req,res)=>{
    res.send("Hello Express! POST")


})

let Port = 4300 || 4000


app.listen(Port , ()=>{
    console.log("Your Server has been started at Port " + Port)
})