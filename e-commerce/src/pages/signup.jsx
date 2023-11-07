import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "./styles/signup.css";
import auth from "../auth/auth";
import { db } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { addDoc, collection } from "firebase/firestore";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      });
      setError("");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("An error occurred!");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setError("");
      navigate("/");
    } catch (error) {
      setError("An error occurred! Please check your credentials");
    }
  };

  return (
    <div className="signup">
      <div className="form">
        <img src={logo}></img>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        <div className="line-container">
          <div className="line"></div>
          <label className="or">OR</label>
          <div className="line"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
          <label>
            By signing up, you agree to our <a href="">Terms</a>,
          </label>
          <label>
            <a href="">Privacy Policy</a> and <a href="">Cookies Policy</a>
          </label>
          <button type="submit">Sign Up</button>
          <label className="error">{error}</label>
          <div>
            <label>Already have an account?</label>
            <a href="/login"> Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
