import Navbar from "../components/navbar";
import Offers from "../components/offers";
import Product from "../components/product";
import painting1 from "../assets/painting1.jpeg";
import painting2 from "../assets/painting2.jpeg";
import painting3 from "../assets/painting3.jpeg";
import painting4 from "../assets/painting4.jpeg";
import painting5 from "../assets/painting5.jpeg";
import "./styles/landing.css";

const painting = [
  {
    link: "/",
    image: painting1,
    title: "Product 1",
  },
  {
    link: "/",
    image: painting2,
    title: "Product 2",
  },
  {
    link: "/",
    image: painting3,
    title: "Product 3",
  },
  {
    link: "/",
    image: painting4,
    title: "Product 4",
  },
  {
    link: "/",
    image: painting5,
    title: "Product 5",
  },
];

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Offers />
      <Product heading="Paintings" products={painting} />
    </div>
  );
};

export default Landing;
