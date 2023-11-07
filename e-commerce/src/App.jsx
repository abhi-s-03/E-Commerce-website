import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Landing from "./pages/landing";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import AddProduct from "./pages/addProduct";
import AddImage from "./pages/addImage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/image" element={<AddImage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
