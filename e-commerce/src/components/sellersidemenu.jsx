import React from "react";
import "./styles/sellersidemenu.css";

const sellersidemenu = ({ isMenuOpen, handleSectionChange, activeSection }) => {
  return (
    <nav className={`side-menu ${isMenuOpen ? "open" : ""}`}>
      <ul>
        <li
          onClick={() => handleSectionChange("artworkManagement")}
          className={activeSection === "artworkManagement" ? "active" : ""}
        >
          Artwork Management
        </li>
        <li
          onClick={() => handleSectionChange("orders")}
          className={activeSection === "orders" ? "active" : ""}
        >
          Orders
        </li>
        <li
          onClick={() => handleSectionChange("profile")}
          className={activeSection === "profile" ? "active" : ""}
        >
          Profile
        </li>
        <li
          onClick={() => handleSectionChange("earnings")}
          className={activeSection === "earnings" ? "active" : ""}
        >
          Earnings
        </li>
      </ul>
    </nav>
  );
};

export default sellersidemenu;
