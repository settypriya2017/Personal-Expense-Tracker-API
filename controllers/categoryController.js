const Category = require("../models/categoryModel");

exports.addCategory = (req, res) => {
  const { name, type } = req.body;
  Category.create(name, type, (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ categoryId: result.lastID });
  });
};

exports.getAllCategories = (req, res) => {
  Category.getAll((err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
};
