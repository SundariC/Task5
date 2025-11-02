import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container bg-black mt-20 p-8 rounded-lg w-full">
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
  );
};

export default ProductList;