const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    brand: {
      type: String,
      default: "Generic",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/150", // Placeholder image
    },
    description: {
      type: String,
      default: "No description available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
