import express from "express";
import mongoose from "mongoose";

const app = express();

try {
// //   let conn = await mongoose.connect("mongodb+srv://arpit:Arpit@2003@cluster0.qvmmxj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//   let conn =  mongoose.connect("mongodb://localhost:27017")


console.log("Data Base Connected Successully")
let URI = "mongodb+srv://arpitvermaetw:xT3JaNpWGSabOHPC@innerdata.v6pwutf.mongodb.net/"

  
  mongoose.connect(URI)
  
} catch (error) {
  console.log("Not Connect" , error.message);
}

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.post("/apis", (req, res) => {
  res.send("Hello Post by /apis");
});

let Port = 10000 || 4000;

app.listen(Port, () => {
  console.log("Your Server has been started at Port " + Port);
});
