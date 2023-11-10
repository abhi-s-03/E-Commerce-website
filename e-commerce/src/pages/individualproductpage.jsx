// individualproductpage.jsx

import React from "react";
import { Link } from "react-router-dom";
import carticon from "../assets/carticon.svg";
import buyicon from "../assets/buyicon.svg"; // Import your buy icon
import backArrow from "../assets/back-arrow.svg";

import './styles/individualproductpage.css';

function IndividualProductPage({ location = { state: null } }) {
  // Dummy values
  const dummyData = {
    sellerName: "Abhishek S",
    image: "item1.jpg", // Placeholder image URL
    prodName: "Abstract Masterpiece",
    prodDesc: "A stunning abstract artwork that captures the essence of emotions. Remembering to Abhilash for his new Ray Ban glasses",
    prodPrice: 200.50,
  };

  const { sellerName, image, prodName, prodDesc, prodPrice } = location.state || dummyData;

  return (
    <div className="individual-product-container">
      <Link to="#" className="back-link">
        <img src={backArrow} alt="Back" className="back-arrow" />
      </Link>
      <div className="product-image-container">
        <img src={image} alt={prodName} className="product-image" />
      </div>
      <div className="product-details-container">
        <h2 className="product-name">{prodName}</h2>
        <p className="seller-name">Sold by: {sellerName}</p>
        <p className="product-price">Price: ₹{prodPrice}</p>
        <p className="product-description">{prodDesc}</p>
        <div className="add-to-cart-section">
          <button className="add-to-cart-button">
            <img src={carticon} alt="Add to Cart" className="cart-icon" />
            Add to Cart
          </button>
          <button className="buy-now-button">
            <img src={buyicon} alt="Buy Now" className="buy-icon" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndividualProductPage;
