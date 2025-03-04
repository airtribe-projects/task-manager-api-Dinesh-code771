const Joi = require("joi");
let tasks = [
  {
    id: 1,
    title: "Set up environment",
    description: "Install Node.js, npm, and git",
    completed: true,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: false,
    priority: "medium",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    completed: true,
    priority: "high",
  },
];

const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  completed: Joi.boolean().strict().required(),
  priority: Joi.string().optional(),
});

module.exports = { tasks, taskSchema };
