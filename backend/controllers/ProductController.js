const Product = require("../backend/models/Product");

exports.addProduct = async (req, res) => {
  try {
    const { name, brand, price, image, description } = req.body;

    const product = new Product({ name, brand, price, image, description });
    await product.save();

    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
