import { useState } from "react";
import "./styles/login.css";
import auth from "../auth/auth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/login.jpg";
import loginlogo from "../assets/loginlogo.jpg";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/");
    } catch (error) {
      setError("An error occurred! Please check your credentials");
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
    <div className="login">
      <div className="left">
        <img src={loginimg}></img>
      </div>
      <div className="right">
        <img src={loginlogo}></img>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address or Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Log In</button>
          <label className="error">{error}</label>
          <label>Forgotten your Password?</label>
          <div className="line-container">
            <div className="line"></div>
            <label className="or">OR</label>
            <div className="line"></div>
          </div>
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </form>
        <div>
          <label>Don&apos;t have an account?</label>
          <a href="/signup"> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;