import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>
            <Link 
              to="/products" 
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <span>📦</span>
              <span>Products</span>
            </Link>
            <Link 
              to="/categories" 
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <span>📂</span>
              <span>Categories</span>
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-300 transition-colors flex items-center space-x-1"
            >
              <span>ℹ️</span>
              <span>About</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search products..." 
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <button className="absolute right-2 top-2 text-gray-400 hover:text-white">
                🔍
              </button>
            </div>
            <Link 
              to="/cart" 
              className="hover:text-blue-300 transition-colors flex items-center space-x-1 relative"
            >
              <span>🛒</span>
              <span>Cart</span>
              {cart.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
