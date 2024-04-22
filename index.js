import express from "express"
import mongoose from "mongoose"

const app = express()

let conn =  await mongoose.connect("mongodb://127.0.0.1:27017")



app.get("/" , (req,res)=>{
    res.send("Hello Express!")
})

let Port = 10000 ||  4000


app.listen(Port , ()=>{
    console.log("Your Server has been started at Port " + Port)
})