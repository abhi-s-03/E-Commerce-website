import Navbar from "../components/navbar";
import Offers from "../components/offers";
import Product from "../components/product";
import Footer from "../components/footer";
import "./styles/landing.css";
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../auth/auth';

const Landing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, 'products'));
        const snapshot = await getDocs(q);
        const productsArray = [];
        snapshot.forEach((doc) => {
          productsArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setProducts(productsArray);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  const painting = products.filter((product) => product.prodType === 'Painting');
  const handicraft = products.filter((product) => product.prodType === 'Handicraft');
  const sculpture = products.filter((product) => product.prodType === 'Sculpture');
  const digiart = products.filter((product) => product.prodType === 'Digital Art');
  const photo = products.filter((product) => product.prodType === 'Photography');


  return (
    <div className="landing">
      <Navbar />
      <Offers />
      <Product heading="Paintings" products={painting} more="/paintings"/>
      <Product heading="Sculptures" products={sculpture} more="/sculptures" />
      <Product heading="Digital Art" products={digiart} more="/digiart" />
      <Product heading="Photography" products={photo} more="/photography"/>
      <Product heading="Handicrafts" products={handicraft} more="/handicrafts" />
      <Footer />
    </div>
  );
};

export default Landing;
