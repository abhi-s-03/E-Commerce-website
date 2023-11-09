// ArtworkManagement.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  where,
  query,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../auth/auth";
import './styles/ArtworkManagement.css';

function ArtworkManagement() {
  const [artistProd, setArtistProd] = useState([]);
  const [editArtworkData, setEditArtworkData] = useState({
    id: '',
    prodName: '',
    prodDesc: '',
    prodQty: 0,
    prodPrice: 0,
  });
  const [isEditing, setIsEditing] = useState(false);

  const loadProducts = async () => {
    try {
      const q = query(collection(db, "products"), where("artistID", "==", "Admin"));
      const snapshot = await getDocs(q);
      const prodArray = [];
      snapshot.forEach((doc) => {
        prodArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setArtistProd(prodArray);
    } catch (error) {
      console.error("ERROR is" + error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const editArtwork = (id) => {
    const artworkToEdit = artistProd.find((art) => art.id === id);
    setEditArtworkData(artworkToEdit);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setEditArtworkData({
      id: '',
      prodName: '',
      prodDesc: '',
      prodQty: 0,
      prodPrice: 0,
    });
    setIsEditing(false);
  };

  const saveEdit = async () => {
    const { id, prodName, prodDesc, prodQty, prodPrice } = editArtworkData;

    try {
      await updateDoc(doc(db, 'products', id), {
        prodName,
        prodDesc,
        prodQty: parseInt(prodQty),
        prodPrice: parseInt(prodPrice),
      });

      loadProducts();
      cancelEdit();
    } catch (error) {
      console.error('Error updating artwork:', error);
    }
  };

  const deleteArtwork = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      loadProducts();
    } catch (error) {
      console.error('Error deleting artwork:', error);
    }
  };

  return (
    <div className="artwork-management-container">
      <Link to="/add">
        <button className="add-artwork-button">
          Add New Artwork
        </button>
      </Link>
      <h2>My Artworks</h2>

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

      {isEditing && (
        <div className="edit-artwork-popup">
          <div className="edit-artwork-form">
            <h3>Edit Artwork</h3>
            <label>
              Name:
              <input
                type="text"
                value={editArtworkData.prodName}
                onChange={(e) => setEditArtworkData({ ...editArtworkData, prodName: e.target.value })}
              />
            </label>
            <label>
              Description:
              <textarea
                value={editArtworkData.prodDesc}
                onChange={(e) => setEditArtworkData({ ...editArtworkData, prodDesc: e.target.value })}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={editArtworkData.prodQty}
                onChange={(e) => setEditArtworkData({ ...editArtworkData, prodQty: parseInt(e.target.value) || 0 })}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                value={editArtworkData.prodPrice}
                onChange={(e) => setEditArtworkData({ ...editArtworkData, prodPrice: parseFloat(e.target.value) || 0 })}
              />
            </label>
            <div className="edit-artwork-buttons">
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtworkManagement;
