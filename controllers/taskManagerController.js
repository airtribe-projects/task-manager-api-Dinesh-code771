let { tasks, taskSchema } = require("../modal/taskManager");

const createTask = (req, res) => {
  const { title, description, completed } = req.body;
  const { error } = taskSchema.validate({ title, description, completed });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const task = { id: tasks.length + 1, title, description, completed };
  tasks.push(task);
  res.status(201).json(task);
};

const getTasks = (req, res) => {
  const { completed } = req.query;
  if (completed) {
    const task = tasks.filter(
      (task) => task.completed.toString() === completed
    );
    console.log(completed, task);
    return res.status(200).json(task);
  }
  res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json(task);
};
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const { error } = taskSchema.validate({ title, description, completed });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const task = tasks.find((task) => task.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.title = title;
  task.description = description;
  task.completed = completed;
  res.status(200).json(task);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  let task = tasks.find((task) => task.id === parseInt(id));
  console.log(task, id);
  if (!task) {
    return res.status(404).send();
  }
  tasks = tasks.filter((task) => task.id !== parseInt(id));
  console.log(tasks);
  res.status(200).json({ message: "Task deleted successfully" });
};

const getTaskByPriority = (req, res) => {
  const { level } = req.params;
  const task = tasks.filter((task) => task.priority === level);
  res.status(200).json(task);
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
  getTaskByPriority,
};
