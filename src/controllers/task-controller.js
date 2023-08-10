import Task from "../models/Task.js";

export const postTodo = async (req, res) => {
  try {
    const { title, succeed } = req.body;

    const newTask = new Task({
      title,
      succeed,
    });

    const savedTask = await newTask.save();

    return res.status(201).json(savedTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTasks = async (req, res) => {
  const data = await Task.find();
  return res.status(200).json(data);
};

export const deleteOne = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deleteTask = await Task.findOneAndDelete({ _id: taskId });
    if (!deleteTask) {
      return res.status(404).json("task not found");
    }
    res.status(200).json("deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompleted = async (req, res) => {
  try {
    await Task.deleteMany({ succeed: true });
    res.status(200).json({ message: "Completed task delete successfully" });
  } catch (error) {
    res.status(500).json({ error: "an error occured" });
    console.log(error);
  }
};
