const Order = require("../models/Order");
const Cart = require("../models/Cart");

// ✅ Checkout Controller
exports.checkout = async (req, res) => {
  try {
    // 📦 Get the user's cart
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "🛒 Your cart is empty" });
    }

    // 💰 Calculate total price
    const totalPrice = cart.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    // 🧾 Create new order
    const order = new Order({
      user: req.user._id,
      items: cart.items.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice,
      isPaid: true,
      paidAt: Date.now(),
    });

    await order.save();

    // ♻️ Clear cart after order is placed
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: "✅ Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: err.message || "Checkout failed" });
  }
};
