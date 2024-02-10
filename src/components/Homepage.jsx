import { Container, Row, Col, button } from "react-bootstrap";
import Logo from "../assets/Logo.svg";

export const Homepage = () => {
  return (
    <section className="Homepage">
      <div className="background-image"></div>
      <div className="upperpart">
        <Col>
          <img src={Logo} alt="La mia foto" className="Logo"></img>
        </Col>
        <Col>
          <button className="butt1">Log-in</button>
          <button className="butt2">Sign-Up</button>
        </Col>
      </div>
    </section>
  );
};

export default Homepage;
