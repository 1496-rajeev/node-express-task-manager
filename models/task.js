import mongoose from 'mongoose';

//Task Schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name required'],
    trim: true,
    maxlength: [20, 'name can not me more than 20 character'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', TaskSchema);

export { Task };
