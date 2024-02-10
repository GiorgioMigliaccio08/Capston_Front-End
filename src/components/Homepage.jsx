import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../assets/Logo.svg";

export const Homepage = () => {
  return (
    <section className="Homepage">
      <div className="background-image"></div>
      <div className="upperpart">
        <Col lg={6} md={4}>
          <img src={Logo} alt="La mia foto" className="Logo" />
          <h1 className="Title">Benvenuto!</h1>
          <p className="Description">
            Heart Archive Hub, è il tuo rifugio digitale <br /> per conservare
            tutti i tuoi documenti
            <br /> medici in un unico luogo sicuro e accessibile,
            <br /> insieme alla gestione semplice e intuitiva
            <br /> dei tuoi prossimi appuntamenti.
          </p>
        </Col>
        <Col lg={6} md={4}>
          <Button className="butt1">Log-in</Button>
          <Button className="butt2">Sign-Up</Button>
        </Col>
      </div>
    </section>
  );
};

export default Homepage;
