import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={()=>navigate("/login")}>Signup</button>
    </div>
  );
};

export default Landing;
