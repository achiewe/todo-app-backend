import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  succeed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Task = model("tasks", taskSchema);
export default Task;
