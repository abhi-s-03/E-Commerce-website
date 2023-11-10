// CheckoutForm.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/CheckoutForm.css";
import backArrow from "../assets/back-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    paymentOption: "",
  });

  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message when a field is changed
    setError("");
  };

  const handleProceed = () => {
    // Validate form fields before proceeding
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

    if (isFormValid) {
      // Implement logic for handling the "Proceed" button
      // You can add additional validation or processing here
      console.log("Proceed button clicked!");
    } else {
      setError("Fill all fields");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-container-header">CHECKOUT</div>

      <div className="checkout-form">
        <form>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleFormChange}
                placeholder="Country"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleFormChange}
                placeholder="Region/State"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleFormChange}
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="E-mail"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleFormChange}
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="form-group payment-options full-width">
            <div className="subheading">Payment Option</div>
            <div className="radio-group">
              <label>
                UPI
                <input
                  type="radio"
                  name="paymentOption"
                  value="UPI"
                  checked={formData.paymentOption === "UPI"}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Net Banking
                <input
                  type="radio"
                  name="paymentOption"
                  value="Net Banking"
                  checked={formData.paymentOption === "Net Banking"}
                  onChange={handleFormChange}
                />
              </label>
              <label>
                Cash on Delivery
                <input
                  type="radio"
                  name="paymentOption"
                  value="Cash on Delivery"
                  checked={formData.paymentOption === "Cash on Delivery"}
                  onChange={handleFormChange}
                />
              </label>
            </div>
          </div>
        </form>
        <div className="checkout-child" />
        <div className="return-from-checkout">
          <Link to="/cart" className="back-link">
            <img
              className="back-arrow"
              alt=""
              src={backArrow}
            />
          </Link>
        </div>
        <Link to="/ordersummary" className="proceed-button-link">
          <button className="proceed-button" onClick={handleProceed}>
            PROCEED <img src={rightArrow} alt="Right Arrow" className="arrow-icon" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutForm;
