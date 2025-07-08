const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  price: {
    type: Number,
    required: true,
  },
  image: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
