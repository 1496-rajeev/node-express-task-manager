import mongoose from 'mongoose';

const connectionString = `mongodb+srv://rajeev:rajeev123@node-express-task-manag.ynkvs.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = (url) => {
  return mongoose.connect(connectionString);
};
