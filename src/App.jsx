import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CartModal from "./Components/CartModal";

 
const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      alert("Product already in cart");
      setCart(cart.map(item => item.id === product.id ? { ...productInCart, quantity: productInCart.quantity + 1 } : item));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

if (loading) {
  return <div>Loading...</div>;
}


  return (
  <>
    <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} />
    <ProductList products={products} addToCart={addToCart} />
    {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} removeFromCart={removeFromCart} />}
  </>
);

};

export default App;
