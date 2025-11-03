import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className=" product-list bg-pink-500 min-h-screen pt-10">
    <div className="container mx-auto mt-20 p-6">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((ele) => (
        <ProductCard
          key={ele.id}
          ele={ele}
          addToCart={addToCart}
        />
      ))}
    </div>
    </div>
    </div>
  );
};

export default ProductList;