import express from "express"

const app = express()



app.get("/" , (req,res)=>{
    res.send("Hello Express!")
})

let Port = 10000 ||  4000


app.listen(Port , ()=>{
    console.log("Your Server has been started at Port " + Port)
})