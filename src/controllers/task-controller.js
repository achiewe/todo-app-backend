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

export const deleteAll = async (req, res) => {
  try {
    await Task.deleteMany();
    res.status(200).json("deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
