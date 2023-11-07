import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Landing from "./pages/landing"
import Cart from "./pages/cart"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;