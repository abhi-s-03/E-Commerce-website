import { useState } from "react";
import "./styles/seller.css";
import ArtworkManagement from "../components/ArtworkManagement";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import Earnings from "../components/Earnings";
import SellerSideMenu from "../components/sellersidemenu";
import menuicon from "../assets/menu-icon.svg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
    <>
      <Navbar />
      <div className="seller-header">
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuicon} alt="Menu" />
        </div>
      </div>
      <div className={`seller-dashboard ${isMenuOpen ? "open" : ""}`}>
        <div className="dashboard-content">
          <div className={`${isMenuOpen ? "open" : ""}`}>
            {isMenuOpen && (
              <SellerSideMenu
                isMenuOpen={isMenuOpen}
                handleSectionChange={handleSectionChange}
                activeSection={activeSection}
              />
            )}
          </div>
          <div
            className={`section-content ${isMenuOpen ? "with-sidebar" : ""}`}
          >
            {activeSection === "artworkManagement" && <ArtworkManagement />}
            {activeSection === "orders" && <Orders />}
            {activeSection === "profile" && <Profile />}
            {activeSection === "earnings" && <Earnings />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seller;
