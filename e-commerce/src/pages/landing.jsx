import Navbar from "../components/navbar";
import Offers from "../components/offers";
import Product from "../components/product";
import painting1 from "../assets/painting1.jpeg";
import painting2 from "../assets/painting2.jpeg";
import painting3 from "../assets/painting3.jpeg";
import painting4 from "../assets/painting4.jpeg";
import painting5 from "../assets/painting5.jpeg";
import sculp1 from "../assets/sculp1.jpeg";
import sculp2 from "../assets/sculp2.jpeg";
import sculp3 from "../assets/sculp3.jpeg";
import sculp4 from "../assets/sculp4.jpeg";
import sculp5 from "../assets/sculp5.jpeg";
import digi1 from "../assets/dig1.jpeg";
import digi2 from "../assets/dig2.jpeg";
import digi3 from "../assets/dig3.jpeg";
import digi4 from "../assets/dig4.jpeg";
import digi5 from "../assets/dig5.jpeg";
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
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

const sculpture = [
  {
    link: "/",
    image: sculp1,
    title: "Product 1",
  },
  {
    link: "/",
    image: sculp2,
    title: "Product 2",
  },
  {
    link: "/",
    image: sculp3,
    title: "Product 3",
  },
  {
    link: "/",
    image: sculp4,
    title: "Product 4",
  },
  {
    link: "/",
    image: sculp5,
    title: "Product 5",
  },
];

const digiart = [
  {
    link: "/",
    image: digi1,
    title: "Product 1",
  },
  {
    link: "/",
    image: digi2,
    title: "Product 2",
  },
  {
    link: "/",
    image: digi3,
    title: "Product 3",
  },
  {
    link: "/",
    image: digi4,
    title: "Product 4",
  },
  {
    link: "/",
    image: digi5,
    title: "Product 5",
  },
];

const photo = [
  {
    link: "/",
    image: photo1,
    title: "Product 1",
  },
  {
    link: "/",
    image: photo2,
    title: "Product 2",
  },
  {
    link: "/",
    image: photo3,
    title: "Product 3",
  },
  {
    link: "/",
    image: photo4,
    title: "Product 4",
  },
  {
    link: "/",
    image: photo5,
    title: "Product 5",
  },
];

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Offers />
      <Product heading="Paintings" products={painting} />
      <Product heading="Sculptures" products={sculpture} />
      <Product heading="Digital Art" products={digiart} />
      <Product heading="Photography" products={photo} />
    </div>
  );
};

export default Landing;
