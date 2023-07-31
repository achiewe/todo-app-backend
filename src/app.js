import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import {
  postTodo,
  getTasks,
  deleteAll,
} from "./controllers/task-controller.js";

dotenv.config();
connect();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  return res.status(200).json("asdasd");
});
app.post("/api/addtask", postTodo);
app.get("/api/tasks", getTasks);
app.delete("/api/deleteAll", deleteAll);
app.listen(3000);
