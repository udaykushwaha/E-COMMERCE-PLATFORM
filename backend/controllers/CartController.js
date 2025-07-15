const Cart = require("../models/Cart");

// ✅ Add to Cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // 🔁 Check if product already in cart
      const index = cart.items.findIndex(item => item.product.toString() === productId);

      if (index > -1) {
        // 🆙 Increase quantity
        cart.items[index].quantity += quantity;
      } else {
        // ➕ Add new product
        cart.items.push({ product: productId, quantity });
      }

      await cart.save();
      return res.status(200).json({ message: "Cart updated", cart });
    } else {
      // 🛒 Create new cart for user
      const newCart = new Cart({
        user: req.user._id,
        items: [{ product: productId, quantity }],
      });

      await newCart.save();
      return res.status(201).json({ message: "Cart created", cart: newCart });
    }
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to update cart" });
  }
};

// ✅ Get Current User's Cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(200).json({ items: [] }); // empty cart
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message || "Failed to fetch cart" });
  }
};
