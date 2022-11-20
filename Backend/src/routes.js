const express = require("express");
const routes = express.Router();
const GroupsController = require("./controllers/GroupsController");
const TasksController = require("./controllers/TasksController");

/* ========== TASKS ENDPOINT'S ========== */
routes.post("/tasks/create", TasksController.create);
routes.get("/tasks/list", TasksController.list);
routes.delete("/tasks/delete/:id", TasksController.delete);
routes.put("/tasks/update/:id", TasksController.edit);
routes.patch("/tasks/finish/:id", TasksController.finish);
routes.get("/tasks/findOne/:id", TasksController.findById);
routes.get("/tasks/findTasksByGroup/:id", TasksController.findByGroup);
routes.delete("/tasks/deleteAll", TasksController.deleteAllTasks);

/* ========== GROUPS ENDPOINT'S ========== */
routes.post("/groups/create", GroupsController.create);
routes.get("/groups/list", GroupsController.list);
routes.delete("/groups/delete/:id", GroupsController.delete);
routes.put("/groups/update/:id", GroupsController.edit);
routes.get("/groups/findOne/:id", GroupsController.findById);
routes.delete("/groups/deleteAll", GroupsController.deleteAllGroups);

module.exports = routes;
