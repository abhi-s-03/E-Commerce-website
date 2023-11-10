// OrderSummary.jsx

import React from "react";
import "./styles/OrderSummary.css";
import leftarrow from "../assets/back-arrow.svg";
import { Link } from "react-router-dom";

function OrderSummary() {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      quantity: 1,
    },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateShippingCharges = () => {
    // Implement shipping charges calculation logic here
    return 10;
  };

  const calculateFulltotal = () => {
    return (
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
      calculateShippingCharges()
    );
  };

  return (
    <div className="order-summary-container">
      <div className="order-summary-header">Order Summary</div>

      <div className="order-summary-form">
        <div className="product-details">
          {cartItems.map((item) => (
            <div className="product-item" key={item.id}>
              <div className="product-name-summarypage">{item.name}</div>
              <span className="product-subtotal">Sub-total: ₹{item.price * item.quantity}.00</span>
            </div>
          ))}
        </div>
        <div className="order-details">
          <div className="order-subtotal">
            <span>Sub-Total:</span>
            <span>₹{calculateSubtotal()}.00</span>
          </div>
          <div className="order-shipping-charges">
            <span>Shipping Charges:</span>
            <span>₹{calculateShippingCharges()}.00</span>
          </div>
          <div className="order-total-amount">
            <span>Total Amount:</span>
            <span>₹{calculateFulltotal()}.00</span>
          </div>
        </div>
        <button className="order-place-button">
          Place Order
        </button>
        <div className="order-return-link">
          <Link to="/checkoutform" className="order-back-link">
            <img
              className="order-back-arrow"
              alt=""
              src={leftarrow}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
