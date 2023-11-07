import { Link } from "react-router-dom";
import "./styles/product.css";

const Product = ({ heading, products }) => {
  return (
    <div className="products-outer">
      <div className="heading">
        <h2>{heading}</h2>
        <Link to="/"><label>More</label></Link>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <Link to={product.link}>
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
