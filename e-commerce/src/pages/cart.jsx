import React, { useState } from 'react';
import "./styles/cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      seller: 'Seller 1',
      image: 'image1.jpg',
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      seller: 'Seller 2',
      image: 'image2.jpg',
      price: 30,
      quantity: 1,
    },
  ]);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShippingCharges = () => {
    // Implement your shipping charges calculation logic here
    return 10;
  };

  return (
    <div className="cart-container">
      <div className="header">Shopping Cart</div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Seller: {item.seller}</p>
              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p>₹{item.price * item.quantity}.00</p>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <div className="cart-header">Cart Total</div>
        <div className="subtotal">Subtotal: ₹{calculateSubtotal()}.00</div>
        <div className="shipping-charges">Shipping Charges: ₹{calculateShippingCharges()}.00</div>
        <button className="checkout-button">Proceed to Checkout</button>
    </div>
    </div>
  );
}

export default Cart;
