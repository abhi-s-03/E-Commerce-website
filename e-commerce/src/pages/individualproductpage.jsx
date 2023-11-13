import React from "react";
import { Link, useLocation } from "react-router-dom";
import carticon from "../assets/carticon.svg";
import buyicon from "../assets/buyicon.svg"; // Import your buy icon
import backArrow from "../assets/back-arrow.svg";
import { addDoc,collection } from "firebase/firestore";
import {db} from "../auth/auth";

import './styles/individualproductpage.css';
import Product from "../components/product";

async function AddToCart(data) {
  try {
    const docRef = await addDoc(collection(db, "carts"), {
      productID: data.productID,
      userID: data.userID,
      quantity: data.quantity
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function IndividualProductPage() {
  const location = useLocation();
  const product  = location.state;
  console.log(product);
  const { id, artistID, image, prodName, prodDesc, prodPrice } = product;

  return (
    <div className="individual-product-container">
      <Link to="/" className="back-link">
        <img src={backArrow} alt="Back" className="back-arrow" />
      </Link>
      <div className="product-image-container">
        <img src={image} alt={prodName} className="product-image" />
      </div>
      <div className="product-details-container">
        <h2 className="product-name">{prodName}</h2>
        <p className="seller-name">Sold by: {artistID}</p>
        <p className="product-price">Price: ₹{prodPrice}</p>
        <p className="product-description">{prodDesc}</p>
        <div className="add-to-cart-section">
        <button
          className="add-to-cart-button"
          onClick={() =>
            AddToCart({
              productID: id,
              userID: "njvYETeeSpAF5xIFwfnI",
              quantity: 1,
            })
          }
        >
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
