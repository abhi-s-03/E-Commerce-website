import React, { useState } from 'react';
import "./styles/cart.css";
import deleteimg from "../assets/delete-img.svg";
import plussymbol from "../assets/plus-symbol.svg";
import minussymbol from "../assets/minus-symbol.svg";
import leftarrow from "../assets/leftarrow.svg";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'item1.jpg',
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'item2.jpg',
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

  const calculateFulltotal = () => {
    return (cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + calculateShippingCharges());
  };


  return (
    <div className="cart-container">
      <div className="header">Shopping Cart</div>

      <div className="Product-list">
        <div className="heading">
          <div className="shopping-cart1">Shopping Cart</div>
        </div>
        <div className="sub-heading">
          <div className="products">Products</div>
          <div className="price">Price</div>
          <div className="quantity1">Quantity</div>
          <div className="sub-total">Sub-Total</div>
        </div>
        
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item1">
                <button onClick={() => removeItem(item.id)} className="remove-button">
                  <img className="delete-icon" alt="" src={deleteimg} />
                </button>

                <img className="item-image" src={item.image} alt={item.name} />

                <div className="item-name">{item.name}</div>
              </div>

              <div className="item-price">{item.price}</div>

                
              <div className="quantity">
                <div className="button2">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      <img className="minus-icon" alt="" src={minussymbol} />
                    </button>
                    <div className="item-count">{item.quantity}</div>
                    <button onClick={() => increaseQuantity(item.id)}>
                      <img className="plus-icon" alt="" src={plussymbol} />
                    </button>
                </div>
              </div>
              <div className="item-subtotal">₹{item.price * item.quantity}.00</div>

            </div>
            
          ))}
        </div>

        <div className="shopping-cart-child"/>
        <div className="return-from-cart-section">
          <button className="return-from-cart">
          <img className="regulararrowleft-icon" alt="" src={leftarrow} />
            <b className="label4">  Return to Shop</b>
          </button>
        </div>  
      </div>
      


      <div className="cart-total">
        <div className="cart-total-heading">
          <div className="cart-totals">Cart Totals</div>
        </div>
        <div className="money">
          <div className="sub-total-parent">
              <div className="sub-total-child">
                <div className="subtotal-label">Sub-total</div>
                <div className="subtotal">₹{calculateSubtotal()}.00</div>
              </div>
              <div className="sub-total-child">
                <div className="subtotal-label">Shipping</div>
                <div className="subtotal">₹{calculateShippingCharges()}.00</div>
              </div>
          </div>
          <div className="total-child" />
          <div className="total-parent">
            <div className="total-label">Total</div>
            <div className="total-cost">₹{calculateFulltotal()}.00</div>
          </div>
        </div> 
        <button className="checkout-button">
        <b className="checkout-button-text">Proceed to Checkout </b>
        </button>
      </div>
    </div>
  );
}

export default Cart;
