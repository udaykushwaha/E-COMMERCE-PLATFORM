const Cart = require("../backend/models/Cart");

// Add to Cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // Product already in cart
      const index = cart.items.findIndex(item => item.product.toString() === productId);

      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }

      cart = await cart.save();
      res.status(200).json(cart);
    } else {
      // New cart for user
      const newCart = new Cart({
        user: req.user._id,
        items: [{ product: productId, quantity }],
      });

      await newCart.save();
      res.status(201).json(newCart);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User's Cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    res.json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
