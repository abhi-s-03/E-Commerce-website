import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./styles/navbar.css";
import { useEffect, useState } from "react";
import { db } from '../auth/auth';
import { doc, getDoc } from 'firebase/firestore';
import auth  from '../auth/auth';
import { useNavigate } from 'react-router-dom'
const Navbar = ({ loggedIn }) => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const fetchUsernameFromDatabase = async () => {
      try {
        // Assuming you have a reference to the user document in Firestore
        const storedUserId = localStorage.getItem("userId");
        const userDocRef = doc(db, 'users', storedUserId); // Replace with the actual path or document ID

        // Get the user document
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // Assuming the user document has a 'username' field
          const fetchedUsername = userDocSnapshot.data().name;

          // Set the username state variable
          setUsername(fetchedUsername);
        } else {
          // Handle the case where the user document doesn't exist
          console.error('User document does not exist');
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    if (loggedIn) {
      fetchUsernameFromDatabase();
    } else {
      setUsername(null);
    }
  }, [loggedIn]);
  const navigate = useNavigate();
  const signout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className="topbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="ArtMart" className="logo-img" />
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/seller">Seller</Link>
          </li>
          <li>
          {loggedIn ? <p>{username}</p> : <Link to="/login">Sign In</Link>}
          </li>
          {loggedIn && <li onClick={signout}>Logout</li> }
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
