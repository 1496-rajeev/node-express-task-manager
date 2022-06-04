import { connectDB } from './db/connect.js';
import express from 'express';
import { router as tasks } from './routes/tasks.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/v1/tasks', tasks);

//port
const PORT = 5000;

//connect db and start server
const start = async () => {
  try {
    //connect db
    await connectDB();

    // listen server
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
