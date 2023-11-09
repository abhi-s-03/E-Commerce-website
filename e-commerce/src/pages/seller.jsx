import { useState } from "react";
import "./styles/seller.css";
import ArtworkManagement from "../components/ArtworkManagement";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import Earnings from "../components/Earnings";
import SellerSideMenu from "../components/sellersidemenu";
import { Link } from "react-router-dom";
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
    <div className="seller-dashboard">
      <header>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuicon} alt="Menu" />
        </div>
        <h1>Seller Dashboard</h1>
        <Link to="/">
          <button
            onClick={() => (window.location.href = "/")}
            className="return-button"
          >
            Return
          </button>
        </Link>
      </header>
      <SellerSideMenu
        isMenuOpen={isMenuOpen}
        handleSectionChange={handleSectionChange}
        activeSection={activeSection}
      />
      <div className="section-content">
        {activeSection === "artworkManagement" && <ArtworkManagement />}
        {activeSection === "orders" && <Orders />}
        {activeSection === "profile" && <Profile />}
        {activeSection === "earnings" && <Earnings />}
      </div>
    </div>
  );
};

export default Seller;
