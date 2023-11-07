import { useNavigate } from "react-router-dom";
import AddToCart from "./addToCart"

const Landing = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Landing Page</h1>
      <AddToCart userID="5fhTZZHt5tVHQXpRTgnr1DWOsd72" productID="EeJwkPzp3wCd17A0zHHq" quantity={2}/>
      <button onClick={()=>navigate("/login")}>Signup</button>
    </div>
  );
};

export default Landing;
