const db = require("../database");

module.exports = {
  async create(req, res) {
    var errors = [];
    if (!req.body.title) {
      errors.push("No title specified");
    }

    if (!req.body.limitTime) {
      errors.push("No limitTime specified");
    }

    if (errors.length) {
      res.status(400).json({ error: errors.join(",") });
      return;
    }

    const data = {
      title: req.body.title,
      limitTime: req.body.limitTime,
      hasFinished: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      GroupId: req.body.GroupId || null,
    };
    var sql = `
        INSERT INTO tasks (title, limitTime, hasFinished, createdAt, updatedAt, GroupId) 
        VALUES (?,?,?,?,?,?) 
        `;
    var params = [
      data.title,
      data.limitTime,
      data.hasFinished,
      data.createdAt,
      data.updatedAt,
      data.GroupId,
    ];
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        id: this.lastID,
      });
    });
  },

  async list(req, res) {
    var sql = "select * from tasks";
    var params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  },

  async edit(req, res) {
    var data = {
      title: req.body.title,
      limitTime: req.body.limitTime,
      GroupId: req.body.GroupId,
    };
    const sql = `
      UPDATE tasks set 
        title = COALESCE(?,title),
        limitTime = COALESCE(?,limitTime),
        GroupId = COALESCE(?,GroupId),
        updatedAt = COALESCE(?,updatedAt)
        WHERE TaskId = ?
    `;
    const params = [
      data.title,
      data.limitTime,
      data.GroupId,
      new Date().toDateString(),
      req.params.id,
    ];
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    });
  },

  async finish(req, res) {
    var data = {
      hasFinished: req.body.hasFinished,
    };
    const sql = `
      UPDATE tasks set 
        hasFinished = COALESCE(?,hasFinished)
        WHERE TaskId = ?
    `;
    const params = [data.hasFinished, req.params.id];
    db.run(sql, params, function (err, result) {
      if (err) {
        console.log(err);
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes,
      });
    });
  },

  async delete(req, res) {
    db.run(
      "DELETE FROM tasks WHERE TaskId = ?",
      req.params.id,
      function (err, result) {
        if (err) {
          res.status(400).json({ error: res.message });
          return;
        }
        res.json({ message: "deleted", changes: this.changes });
      }
    );
  },

  async findById(req, res) {
    var sql = "select * from tasks where TaskId = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: row,
      });
    });
  },

  async queryTasks(req, res) {
    const { hasFinished, inProgress, allTasks, startDate, endDate } = req.query;

    var sql = "";
    var params = [];

    if (hasFinished === "true") {
      if (startDate !== endDate) {
        sql =
          "select * from tasks where hasFinished = ? and limitTime >= ? and limitTime <= ?";
        params = [true, startDate, endDate];
      } else {
        sql = "select * from tasks where hasFinished = ?";
        params = [true];
      }
    } else if (inProgress === "true") {
      if (startDate !== endDate) {
        sql =
          "select * from tasks where hasFinished = ? and limitTime >= ? and limitTime <= ?";
        params = [false, startDate, endDate];
      } else {
        sql = "select * from tasks where hasFinished = ?";
        params = [false];
      }
    } else {
      sql = "select * from tasks";
    }

    db.all(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: row ? row : [],
      });
    });
  },

  async findByGroup(req, res) {
    var sql = "select * from tasks where GroupId = ?";
    var params = [req.params.id];
    db.all(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: row,
      });
    });
  },

  async deleteAllTasks(req, res) {
    db.run("delete from tasks", [], function (err, result) {
      if (err) {
        console.log("erro: ", err);
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted all", changes: this.changes });
    });
  },

  async deleteAllTasksByGroup(req, res) {
    db.run(
      "delete from tasks where GroupId = ?",
      [req.params.id],
      function (err, result) {
        if (err) {
          console.log("erro: ", err);
          res.status(400).json({ error: res.message });
          return;
        }
        res.json({ message: "deleted all by group", changes: this.changes });
      }
    );
  },
};
