const db = require("../config/db")();

exports.create = (type, category, amount, date, description, callback) => {
  const query = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [type, category, amount, date, description], callback);
};

exports.getAll = (callback) => {
  const query = `SELECT * FROM transactions`;
  db.all(query, [], callback);
};

exports.getById = (id, callback) => {
  const query = `SELECT * FROM transactions WHERE id = ?`;
  db.get(query, [id], callback);
};

exports.update = (id, type, category, amount, date, description, callback) => {
  const query = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
  db.run(query, [type, category, amount, date, description, id], callback);
};

exports.delete = (id, callback) => {
  const query = `DELETE FROM transactions WHERE id = ?`;
  db.run(query, [id], callback);
};
