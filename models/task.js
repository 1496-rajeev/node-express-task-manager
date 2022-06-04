import mongoose from 'mongoose';

//Task Schema
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});
const Task = mongoose.model('Task', TaskSchema);

export { Task };
