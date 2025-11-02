import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({cartCount, onCartClick}) => {
  return (
    <nav className="navbar bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white fixed w-full top-0 z-10 shadow-md mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand text-lg text-white font-bold">MY STORE</div>
        <div className="nav-actions">
          <button
            className="bg-white px-4 py-2 rounded cart-btn flex items-center hover:outline-none focus:outline-none text-indigo-200"
            onClick={onCartClick}
          >
            <TiShoppingCart className="text-2xl" />
            <span className="cart-count ml-2">{cartCount}</span>
          </button>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;

