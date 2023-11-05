import { useState } from "react";
import "./styles/login.css";
import auth from "../auth/auth";
import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
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
      await signInWithEmailAndPassword(auth,email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth,provider);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="login">
      <div className="left"> 
        <img src="../assets/login.jpg"></img>
      </div>
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
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </form>
        <div className="signup">
          <label>Don&apos;t have an account?</label>
          <a href="/signup"> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
