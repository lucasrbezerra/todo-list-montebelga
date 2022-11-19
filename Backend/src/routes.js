const express = require("express");
const routes = express.Router();
// const TasksController = require("./controllers/TasksController");

routes.get("/", (req, res) => {
  res.send("Olá Mundo");
});

// routes.get('/import', TasksController.import);

// routes.post('/create', TasksController.create);
// routes.delete('/delete/:id', TasksController.delete);
// routes.put('/update/:id', TasksController.update);
// routes.get('/list', TasksController.list)
// routes.get('/findOne/:id', TasksController.findById);

module.exports = routes;
