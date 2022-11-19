const express = require("express");
const routes = express.Router();
const GroupsController = require("./controllers/GroupsController");
// const TasksController = require("./controllers/TasksController");

routes.get("/", (req, res) => {
  res.send("Olá Mundo");
});

/* ========== TASKS ENDPOINT'S ========== */
// routes.post('/create', TasksController.create);
// routes.get('/list', TasksController.list)
// routes.delete('/delete/:id', TasksController.delete);
// routes.put('/update/:id', TasksController.update);
// routes.get('/findOne/:id', TasksController.findById);

/* ========== GROUPS ENDPOINT'S ========== */
routes.post("/create", GroupsController.create);
routes.get("/list", GroupsController.list);
routes.delete('/delete/:id', GroupsController.delete);
routes.put('/update/:id', GroupsController.edit);
routes.get('/findOne/:id', GroupsController.findById);

module.exports = routes;
