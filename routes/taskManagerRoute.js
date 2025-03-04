const router = require("express").Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
  getTaskByPriority,
} = require("../controllers/taskManagerController");

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", getTaskById);
router.get("/priority/:level", getTaskByPriority);
module.exports = router;
