const express = require("express");
const taskController = require("../controllers/task");
const taskRouter = express.Router();

taskRouter.use("/tasks/post", taskController.postTask);
taskRouter.use("/tasks/create", taskController.addTask);
taskRouter.use("/tasks", taskController.getTasks);
taskRouter.use("/admin", taskController.getTasksAdmin);
taskRouter.use("/tasks/get", taskController.getTask);
taskRouter.get("/edit/:id", taskController.editTask);
taskRouter.post("/edit/:id", taskController.postEditTask);
taskRouter.use("/delete/:id", taskController.deleteTask);



module.exports = taskRouter;