import React, { useState } from 'react';
import './ArtworkManagement.css';
import { Link } from "react-router-dom";

const ArtworkManagement = () => {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: 'Artwork 1',
      image: 'item1.jpg',
      description: 'Description of Artwork 1',
      quantity: 5,
      price: '$50',
    },
    {
      id: 2,
      title: 'Artwork 2',
      image: 'item2.jpg',
      description: 'Description of Artwork 2',
      quantity: 3,
      price: '$70',
    },
    // Add more artworks as needed
  ]);

  const addArtwork = () => {
    // Implement functionality to add a new artwork
  };

  const editArtwork = (id) => {
    // Implement functionality to edit an existing artwork
  };

  const deleteArtwork = (id) => {
    // Implement functionality to delete an artwork
  };

  return (
    <div className="artwork-management-container">
      <h2>Artwork Management</h2>
      <Link to="/add">
      <button onClick={addArtwork} className="add-artwork-button">
        Add New Artwork
      </button>
      </Link>
      <ul className="artwork-list">
        {artworks.map((artwork) => (
          <li key={artwork.id} className="artwork-card">
            <div className="artwork-image">
              <img src={artwork.image} alt={artwork.title} />
            </div>
            <div className="artwork-info">
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
              <p>Quantity: {artwork.quantity}</p>
              <p>Price: {artwork.price}</p>
            </div>
            <div className="action-buttons">
              <button onClick={() => editArtwork(artwork.id)}>Edit</button>
              <button onClick={() => deleteArtwork(artwork.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworkManagement;
