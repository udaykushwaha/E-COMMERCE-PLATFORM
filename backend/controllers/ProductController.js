const Product = require("../models/Product");

// ✅ Add New Product
exports.addProduct = async (req, res) => {
  try {
    const { name, brand, price, image, description } = req.body;

    // Basic validation
    if (!name || !brand || !price || !image || !description) {
      return res.status(400).json({ message: "All product fields are required" });
    }

    const product = new Product({ name, brand, price, image, description });
    await product.save();

    res.status(201).json({ message: "✅ Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to add product" });
  }
};

// ✅ Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to fetch products" });
  }
};
