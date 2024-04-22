import express from "express";
import mongoose from "mongoose";

const app = express();

try {
  let conn =  mongoose.createConnection("mongodb://127.0.0.1:27017");
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
