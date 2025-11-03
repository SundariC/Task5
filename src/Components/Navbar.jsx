import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({cartCount, onCartClick}) => {
  return (
    <nav className="navbar bg-pink-200 p-6 text-white fixed w-full top-0 z-10 shadow-md mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand text-lg text-pink-500 font-bold">MY STORE</div>
        <div className="nav-actions">
          <button
            className="bg-rose-700 text-white shadow-lg px-4 py-2 rounded cart-btn flex items-center hover:outline-none hover:bg-rose-800 hover:text-black focus:outline-none"
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


