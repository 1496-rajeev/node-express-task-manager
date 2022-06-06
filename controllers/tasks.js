import { Task } from '../models/task.js';
import { Service } from '../service/tasks.js';
//get all task
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//get single task
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update task
const updateTask = (req, res) => {
  res.send('update task');
};

//delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    // res.send('delete task');
  } catch (error) {}
};

export { getAllTasks, getTask, createTask, updateTask, deleteTask };
