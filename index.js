import express from 'express';
import { router as tasks } from './routes/tasks.js';

const app = express();

//middleware
app.use(express.json());

//routes
app.use('/v1/tasks', tasks);

//port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
