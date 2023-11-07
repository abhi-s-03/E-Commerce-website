import React, { useState } from 'react';
import './ArtworkManagement.css';

const ArtworkManagement = () => {
  const [artworks, setArtworks] = useState([
    { id: 1, title: 'Artwork 1', description: 'Description of Artwork 1' },
    { id: 2, title: 'Artwork 2', description: 'Description of Artwork 2' },
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
      <button onClick={addArtwork}>Add New Artwork</button>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            {artwork.title} - {artwork.description}
            <button onClick={() => editArtwork(artwork.id)}>Edit</button>
            <button onClick={() => deleteArtwork(artwork.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworkManagement;
