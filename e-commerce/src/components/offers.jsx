import offer from "../assets/offer.jpg";
import "./styles/offers.css";
const Offers = () => {
  return (
    <div className="offer-img">
      <img src={offer} alt="offer" className="offer" />
    </div>
  );
};

export default Offers;
