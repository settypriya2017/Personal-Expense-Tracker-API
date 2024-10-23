const Transaction = require("../models/transactionModel");

exports.addTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  Transaction.create(
    type,
    category,
    amount,
    date,
    description,
    (err, result) => {
      if (err) return res.status(400).json({ error: err.message });
      res.status(201).json({ transactionId: result.lastID });
    }
  );
};

exports.getAllTransactions = (req, res) => {
  Transaction.getAll((err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
};

exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  Transaction.getById(id, (err, row) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Transaction not found" });
    res.json(row);
  });
};

exports.updateTransaction = (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  Transaction.update(
    id,
    type,
    category,
    amount,
    date,
    description,
    (err, result) => {
      if (err) return res.status(400).json({ error: err.message });
      if (result.changes === 0)
        return res.status(404).json({ error: "Transaction not found" });
      res.json({ message: "Transaction updated successfully" });
    }
  );
};

exports.deleteTransaction = (req, res) => {
  const { id } = req.params;
  Transaction.delete(id, (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    if (result.changes === 0)
      return res.status(404).json({ error: "Transaction not found" });
    res.json({ message: "Transaction deleted successfully" });
  });
};
