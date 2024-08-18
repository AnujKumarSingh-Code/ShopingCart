'use client'
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState({});

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const applyDiscount = (code) => {
    if (code === 'SAVE10') {
      setDiscount({ type: 'fixed', value: 10 });
    } else if (code === 'SAVE10PERCENT') {
      setDiscount({ type: 'percent', value: 10 });
    }
  };


  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedUser = JSON.parse(localStorage.getItem('user')); 
    setCart(storedCart);
    setUser(storedUser); 
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('user', JSON.stringify(user)); 
  }, [cart, user]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
  };

  const getTotalPrice = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if (discount.type === 'fixed') {
      return Math.max(0, subtotal - discount.value);
    } else if (discount.type === 'percent') {
      return subtotal * (1 - discount.value / 100);
    }
    return subtotal;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, applyDiscount, getTotalPrice, discount, setCart, login , logout , user }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
