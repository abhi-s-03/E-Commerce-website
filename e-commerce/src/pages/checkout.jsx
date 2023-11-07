import React, { useState } from 'react';
import './styles/checkout.css';
import leftarrow from "../assets/leftarrow.svg";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    region: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    paymentOption: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
  });


  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      quantity: 1,
    },
  ]);

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    // Implement your payment processing logic here
  };

  return (
    <div className="checkout-container">

    <div className="checkout-container-header">Art Mart</div>

      <div className="checkout-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input type="text" name="country" value={formData.country} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region/State:</label>
              <input type="text" name="region" value={formData.region} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code:</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleFormChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" value={formData.email} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleFormChange} />
            </div>
          </div>
          <div className="form-group">
        <label>Payment Option:</label>
        <div className="radio-group">
            <label>
            UPI
            <input
                type="radio"
                name="paymentOption"
                value="UPI"
                checked={formData.paymentOption === 'UPI'}
                onChange={handleFormChange}
            />
            </label>
            <label>
            Net Banking
            <input
                type="radio"
                name="paymentOption"
                value="Net Banking"
                checked={formData.paymentOption === 'Net Banking'}
                onChange={handleFormChange}
            />
            </label>
            <label>
            Cash on Delivery
            <input
                type="radio"
                name="paymentOption"
                value="Cash on Delivery"
                checked={formData.paymentOption === 'Cash on Delivery'}
                onChange={handleFormChange}
            />
            </label>
        </div>
        </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cardName">Name on Card:</label>
              <input type="text" name="cardName" value={formData.cardName} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleFormChange} />
            </div>
          </div>
        </form>
        <div className="checkout-child"/>
        <div className="return-from-checkout">
          <button className="return-from-checkout-button">
          <img className="return-from-checkout-regulararrowleft-icon" alt="" src={leftarrow} />
            <b className="return-from-checkout-label4">  Return to Cart</b>
          </button>
        </div>
      </div>


      <div className="order-summary">
        <h2 className="order-summary-heading">Order Summary</h2>
        <div className="product-details">
          {cartItems.map((item) => (
            <div className="product-name" key={item.id}>
              <div className="product1-name">{item.name}</div>
              <span>Sub-total: ₹{item.price * item.quantity}.00</span>
            </div>
          ))}
        </div>
        <div className="order-details">
          <div className="subtotal">
            <span>Sub-Total:</span>
            <span>₹{calculateSubtotal()}.00</span>
          </div>
          <div className="shipping-charges">
            <span>Shipping Charges:</span>
            <span>₹{calculateShippingCharges()}.00</span>
          </div>
          <div className="total-amount">
            <span>Total Amount:</span>
            <span>₹{calculateFulltotal()}.00</span>
          </div>
        </div>
        <button className="place-order-button" onClick={handlePayment}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;