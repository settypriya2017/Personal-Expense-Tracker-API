const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/categories", categoryController.addCategory);
router.get("/categories", categoryController.getAllCategories);

module.exports = router;
