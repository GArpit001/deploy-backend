import express from "express"

const app = express()

app.get("/" , (req,res)=>{
    res.send("Hello Express!")
})

let PORT = 4000


app.listen(PORT , ()=>{
    console.log("Your Server has been started at Port " + PORT)
})