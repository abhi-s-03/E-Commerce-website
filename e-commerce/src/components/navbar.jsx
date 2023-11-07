import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <Link to="/" className="logo">
          <img src={logo} alt="ArtMart" />
        </Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for artworks, artists and more"
        />
        <button type="submit">Search</button>
      </div>
      <div className="topbar-right">
        <ul className="topbar-links">
          <li>
            <Link to="/dashseller">Seller</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
