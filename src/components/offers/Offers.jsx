import "./offers.css";
import Image from "../../assets/imgs/offer.jpeg";
import { Container } from "react-bootstrap";

export default function Offers() {
  return (
    <Container>
      <h2>Offers</h2>
      <div className="offers">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
          <Offer key={i} />
        ))}
      </div>
    </Container>
  );
}
function Offer() {
  return (
    <div className=" offer ">
      <div className="left-side">
        <h3>Plan your trip</h3>
        <p>Choose your favourate destination and plan your next excape</p>
        <button>Book now!</button>
        <p id="discount">Up to 40% OFF</p>
      </div>
      <img src={Image} alt="girl-travel" />
    </div>
  );
}
