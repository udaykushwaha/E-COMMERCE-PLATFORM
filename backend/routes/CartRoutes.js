const express = require("express");
const router = express.Router();
const { addToCart, getCart } = require("../controllers/cartController");
const protect = require("../middleware/authMiddleware");

// @route   POST /api/cart/add
// @desc    Add product to cart
// @access  Private
router.post("/add", protect, addToCart);

// @route   GET /api/cart
// @desc    Get current user's cart
// @access  Private
router.get("/", protect, getCart);

module.exports = router;
