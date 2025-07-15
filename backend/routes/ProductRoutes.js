const express = require("express");
const router = express.Router();
const { addProduct, getProducts } = require("../controllers/ProductController");
const protect = require("../middleware/authMiddleware");

// @route   POST /api/products/add
// @desc    Add a new product (admin only)
// @access  Private (add protect middleware if needed)
router.post("/add", protect, addProduct);

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", getProducts);

module.exports = router;
