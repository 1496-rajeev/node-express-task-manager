import express from 'express';

const app = express();

//routes
app.get('/', (req, res) => {
  res.send('hello test');
});

//port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
