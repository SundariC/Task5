import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
const ProductCard = ({ ele, addToCart }) => {
    return (
        <div className='bg-pink-200 p-4 shadow-lg rounded-lg'>
           <img src={ele.image} alt={ele.title} className="w-full h-48 object-contain mb-4" /> 
              <h3 className="text-lg font-semibold mb-2 font-sans text-pink-800 text-center">{ele.title}</h3>
                <p className="text-black font-mono font-bold text-center">${ele.price}</p>
                <p className="text-sm text-pink-800 mt-2 h-16 overflow-hidden text-center">{ele.description}</p>
                <h4 className="text-pink-800 font-semibold mt-2 text-center">Category: {ele.category}</h4>
                <div className="flex justify-center">
                <button className="bg-rose-800 text-white font-semibold px-4 py-2 rounded mt-4 hover:bg-rose-900 hover:text-black flex items-center gap-2"
                    onClick={() => addToCart(ele)}>
                    <TiShoppingCart />
                    Add to Cart         
                </button>
                </div>
        </div>
    );
};

export default ProductCard;