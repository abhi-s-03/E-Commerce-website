import React from 'react';
import './styles/Profile.css';

const Profile = () => {
  // You can replace these placeholder values with actual artist data
  const artist = {
    name: 'Aaron Jacob',
    description: 'A talented artist with a passion for creativity.',
    profileImage: 'item1.jpg', // Replace with the image file name or path
  };

  // Implement profile edit and portfolio management functionality here

  return (
    <div className="profile-container">
      <h2>Artist Profile</h2>
      <div className="profile-content">
        <div className="profile-image">
          <img src={artist.profileImage} alt="Artist" />
        </div>
        <div className="profile-details">
          <h3>{artist.name}</h3>
          <p>{artist.description}</p>
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
