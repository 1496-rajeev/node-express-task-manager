export const getAllTasks = (req, res) => {
  res.send('all items..');
};

export const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

export const createTask = (req, res) => {
  res.json(req.body);
};

export const updateTask = (req, res) => {
  res.send('update task');
};

export const deleteTask = (req, res) => {
  res.send('delete task');
};
