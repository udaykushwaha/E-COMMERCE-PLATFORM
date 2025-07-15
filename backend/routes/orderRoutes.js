const express = require("express");
const router = express.Router();
const { checkout } = require("../controllers/orderController");
const protect = require("../middleware/authMiddleware");

// POST /api/orders/checkout
router.post("/checkout", protect, checkout);

module.exports = router;
