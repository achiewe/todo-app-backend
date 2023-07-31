import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
dotenv.config();
connect();
const app = express();
app.get("/", (req, res) => {
  return res.status(200).json("asdasd");
});
app.listen(3000);
