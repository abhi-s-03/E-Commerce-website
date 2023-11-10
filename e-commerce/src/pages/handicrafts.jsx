import Navbar from "../components/navbar";
import Filters from "../components/filters";
import ProductCard from "../components/productcard";
import painting1 from "../assets/painting1.jpeg";
import "./styles/painting.css";

const products = [
  {
    image: painting1,
    name: "Product 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 1000,
  },
];

const Handicrafts = () => {
  return (
    <div className="Paintings">
      <Navbar />
      <div className="filter-product">
        <Filters />
        <div className="product-display">
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};

export default Handicrafts;
