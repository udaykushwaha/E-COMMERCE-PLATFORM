import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            🛍️ E-Commerce Store
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm">📞 1-800-SHOP-NOW</span>
              <span className="text-sm">✉️ support@store.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded transition-colors">
                Login
              </button>
              <button className="bg-green-500 hover:bg-green-400 px-3 py-1 rounded transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
