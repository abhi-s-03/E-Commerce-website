import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Cart from "./pages/cart";
import Landing from "./pages/landing"

function App() {
  return (
    //<>
      //<Router>
        //<Routes>
          //<Route path="/" element={<Landing/>} />
          //<Route path="/login" element={<LoginForm />} />
          //<Route path="/signup" element={<SignupForm />} />
        //</Routes>
      //</Router>
      <div className="App">
      <Cart/>
    </div>
    //</>
  );
}

export default App;