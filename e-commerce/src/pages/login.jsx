import { useState } from "react";
import "./styles/login.css";
import auth from "../auth/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      await auth().signInWithPopup(provider);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  const handlePhoneSignIn = async () => {
    try {
      const provider = new auth.PhoneAuthProvider();
      await auth().signInWithPopup(provider);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="login">
      <div className="left"> </div>
      <div className="right">
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
          <label>Forgotten your Password?</label>
          <div className="line-container">
            <div className="line"></div>
            <label className="or">OR</label>
            <div className="line"></div>
          </div>
          <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          <button onClick={handlePhoneSignIn}>Sign in with Phone</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
