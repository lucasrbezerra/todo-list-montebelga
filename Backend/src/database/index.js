const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = __dirname + "/database.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createTable(db) {
  return Promise.all([
    db.exec(`
        CREATE TABLE IF NOT EXISTS groups (
            GroupId INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            createdAt TEXT,
            updatedAt TEXT
        );
    `),
    db.exec(`
        CREATE TABLE IF NOT EXISTS tasks (
            TaskId INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            limitTime TEXT,
            hasFinished BOOLEAN,
            createdAt TEXT,
            updatedAt TEXT,
            GroupId INTEGER REFERENCES groups (GroupId) ON DELETE CASCADE ON UPDATE CASCADE
        );
    `),
  ]);
}

module.exports = createDbConnection();
