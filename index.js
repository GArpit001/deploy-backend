import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  let conn =  mongoose.connect("mongodb+srv://arpit:Arpit@2003@cluster0.qvmmxj6.mongodb.net/");
} catch (error) {
  console.log("Not Connect");
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
