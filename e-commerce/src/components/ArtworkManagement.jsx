import './styles/ArtworkManagement.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import {db} from "../auth/auth";

function ArtworkManagement() {
  const [artistProd, setArtistProd] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const q = query(collection(db, "products"), where("artistID", "==", "Aaron"));
        const snapshot = await getDocs(q);
        const prodArray = [];
        snapshot.forEach((doc) => {
          prodArray.push(doc.data());
        });
        setArtistProd(prodArray);
      } catch (error) {
        console.error("ERROR is" + error);
      }
    };

    loadProducts();
  }, []); // Empty dependency array to run the effect only once on component mount

  const editArtwork = (id) => {
    // Implement functionality to edit an existing artwork
  };

  const deleteArtwork = (id) => {
    // Implement functionality to delete an artwork
  };

  return (
    <div className="artwork-management-container">
      <h2>My Artworks</h2>
      <Link to="/add">
        <button className="add-artwork-button">
          Add New Artwork
        </button>
      </Link>

      <div className="product-cards">
        {artistProd.map((art) => (
          <div key={art.prodName} className="product-card">
            <img src={art.image} alt={art.prodName} className="product-image" />
            <h3 className="product-name">{art.prodName}</h3>
            <p className="product-description">{art.prodDesc}</p>
            <p className="product-quantity">Quantity: {art.prodQty}</p>
            <p className="product-price">Price: ${art.prodPrice}</p>
            <div className="action-buttons">
              <button onClick={() => editArtwork(art.id)}>Edit</button>
              <button onClick={() => deleteArtwork(art.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtworkManagement;
