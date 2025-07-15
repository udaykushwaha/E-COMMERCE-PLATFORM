const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Apple iPhone 14 Pro",
    brand: "Apple",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1678652188048-dc1cf01734db?w=400&h=300&fit=crop",
    description: "Latest iPhone with A16 Bionic chip, Pro camera system, and Dynamic Island. Available in multiple colors."
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
    description: "Premium Android phone with S Pen, 200MP camera, and 5000mAh battery. Perfect for productivity."
  },
  {
    name: "MacBook Pro 14-inch",
    brand: "Apple",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    description: "Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and up to 18 hours battery life."
  },
  {
    name: "Sony WH-1000XM4",
    brand: "Sony",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
    description: "Industry-leading noise canceling headphones with 30-hour battery life and premium sound quality."
  },
  {
    name: "iPad Air 5th Gen",
    brand: "Apple",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    description: "Powerful tablet with M1 chip, 10.9-inch Liquid Retina display, and support for Apple Pencil."
  },
  {
    name: "Dell XPS 13",
    brand: "Dell",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    description: "Ultra-thin laptop with 11th Gen Intel Core processor, InfinityEdge display, and premium build quality."
  },
  {
    name: "AirPods Pro 2nd Gen",
    brand: "Apple",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    description: "Advanced wireless earbuds with active noise cancellation, spatial audio, and MagSafe charging."
  },
  {
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    description: "Gaming console with vibrant OLED screen, enhanced audio, and wide adjustable stand."
  },
  {
    name: "Canon EOS R5",
    brand: "Canon",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    description: "Professional mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus."
  },
  {
    name: "Dyson V15 Detect",
    brand: "Dyson",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Powerful cordless vacuum with laser dust detection, LCD screen, and up to 60 minutes runtime."
  },
  {
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    price: 129999.99,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
    description: "High-performance electric vehicle with 1020 HP, 0-60 mph in 1.99s, and 396 mile range."
  },
  {
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 8999.99,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=300&fit=crop",
    description: "Luxury dive watch with waterproof to 300 meters, automatic movement, and iconic design."
  }
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
