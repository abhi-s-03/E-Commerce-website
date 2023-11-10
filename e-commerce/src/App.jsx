import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Landing from "./pages/landing";
import Cart from "./pages/cart";
import CheckoutForm from "./pages/checkoutform";
import Order from "./pages/Order";
import AddProduct from "./pages/addProduct";
import Seller from "./pages/seller";
import AddImage from "./pages/addImage";
import Paintings from "./pages/paintings";
import Sculptures from "./pages/sculptures";
import Digiart from "./pages/digiart";
import Photography from "./pages/photography";
import Handicrafts from "./pages/handicrafts";
import Individual from "./pages/individualproductpage";
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
          <Route path="/checkoutform" element={<CheckoutForm />} />
          <Route path="/ordersummary" element={<Order />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/sculptures" element={<Sculptures />} />
          <Route path="/digiart" element={<Digiart />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/handicrafts" element={<Handicrafts />} />
          <Route path="/individual" element={<Individual />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
