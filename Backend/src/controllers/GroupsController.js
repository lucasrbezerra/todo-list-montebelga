const db = require("../database");

module.exports = {
  async create(req, res) {
    var errors = [];
    if (!req.body.title) {
      errors.push("No title specified");
    }
    if (errors.length) {
      res.status(400).json({ error: errors.join(",") });
      return;
    }
    const data = {
      title: req.body.title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    var sql = "INSERT INTO groups (title, createdAt, updatedAt) VALUES (?,?,?)";
    var params = [data.title, data.createdAt, data.updatedAt];
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
    var sql = "select * from groups";
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
    };
    const sql = `
      UPDATE groups set 
        title = COALESCE(?,title), 
        updatedAt = COALESCE(?,updatedAt)
        WHERE GroupId = ?
    `;
    const params = [data.title, new Date().toDateString(), req.params.id];
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

  async delete(req, res) {
    db.run(
      "DELETE FROM groups WHERE GroupId = ?",
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
    var sql = "select * from groups where GroupId = ?";
    var params = [req.params.id];
    db.get(sql, params, (err, row) => {
      if (err || !row) {
        res.status(400).json({ error: err?.message || "Not Found" });
        return;
      }
      res.json({
        message: "success",
        data: row,
      });
    });
  },
};
