// seller.jsx
import { useState } from "react";
import "./styles/seller.css";
import ArtworkManagement from "../components/ArtworkManagement";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import Earnings from "../components/Earnings";
import SellerSideMenu from "../components/sellersidemenu";
import menuicon from "../assets/menu-icon.svg";

const Seller = () => {
  const [activeSection, setActiveSection] = useState("artworkManagement");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`seller-dashboard ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuicon} alt="Menu" />
      </div>
      <header>
        <h1>Seller Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && (
            <SellerSideMenu
              isMenuOpen={isMenuOpen}
              handleSectionChange={handleSectionChange}
              activeSection={activeSection}
            />
          )}
        </div>
        <div className={`section-content ${isMenuOpen ? "with-sidebar" : ""}`}>
          {activeSection === "artworkManagement" && <ArtworkManagement />}
          {activeSection === "orders" && <Orders />}
          {activeSection === "profile" && <Profile />}
          {activeSection === "earnings" && <Earnings />}
        </div>
        
      </div>
    </div>
  );
};

export default Seller;
