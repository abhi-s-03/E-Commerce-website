import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Landing from "./pages/landing"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
