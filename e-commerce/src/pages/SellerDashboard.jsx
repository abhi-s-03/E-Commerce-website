import React, { useState } from 'react';
import './styles/SellerDashboard.css';
import ArtworkManagement from './sellerdash/ArtworkManagement';
import Orders from './sellerdash/Orders';
import Profile from './sellerdash/Profile';
import Earnings from './sellerdash/Earnings';

const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState('artworkManagement');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="seller-dashboard">
      <header>
        <h1>Seller Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <nav className="side-menu">
          <ul>
            <li
              onClick={() => handleSectionChange('artworkManagement')}
              className={activeSection === 'artworkManagement' ? 'active' : ''}
            >
              Artwork Management
            </li>
            <li
              onClick={() => handleSectionChange('orders')}
              className={activeSection === 'orders' ? 'active' : ''}
            >
              Orders
            </li>
            <li
              onClick={() => handleSectionChange('profile')}
              className={activeSection === 'profile' ? 'active' : ''}
            >
              Profile
            </li>
            <li
              onClick={() => handleSectionChange('earnings')}
              className={activeSection === 'earnings' ? 'active' : ''}
            >
              Earnings
            </li>
          </ul>
        </nav>
        <div className="section-content">
          {activeSection === 'artworkManagement' && <ArtworkManagement />}
          {activeSection === 'orders' && <Orders />}
          {activeSection === 'profile' && <Profile />}
          {activeSection === 'earnings' && <Earnings />}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
