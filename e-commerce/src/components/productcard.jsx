import React from "react";
import "./styles/productcard.css";

const ProductCard = ({ products }) => {
  return (
    <div className="product-infocard">
      {products.map((product, index) => (
        <div className="product-info" key={index}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-disc">
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
          </div>
          <div className="price">
            <span>₹{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
