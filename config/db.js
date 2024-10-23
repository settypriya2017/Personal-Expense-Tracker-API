const sqlite3 = require("sqlite3").verbose();

const connectDB = () => {
  const db = new sqlite3.Database("./db/expenses.db", (err) => {
    if (err) {
      console.error("Failed to connect to the database:", err);
    } else {
      console.log("Connected to the SQLite database.");
    }
  });
  return db;
};

module.exports = connectDB;
