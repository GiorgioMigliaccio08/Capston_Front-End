import { Col, Button } from "react-bootstrap";
import Logo from "../assets/Logo.svg";
import Cartella from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const AccessPage = () => {
  return (
    <section className="AccessPage">
      <div className="background-image"></div>
      <div className="upperpart">
        <Col lg={6} md={4}>
          <img src={Logo} alt="La mia foto" className="Logo" />
          <h1 className="Title">Benvenuto!</h1>
          <p className="Description">
            Heart Archive Hub, è il tuo rifugio digitale per conservare
            <br />
            tutti i tuoi documenti medici in un unico luogo sicuro <br />
            e accessibile,insieme alla gestione semplice e intuitiva
            <br /> dei tuoi prossimi appuntamenti.
          </p>
        </Col>
        <Col lg={6} md={4}>
          <Nav className="navlink">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Col>
      </div>
      <div className="centerpart">
        <Col lg={6}>
          <img src={Cartella} alt="Cartella" className="Folder" />
          <div className="textcalendar">
            <h1 className="colortext">Prenota & Ricorda !</h1>
            <p>
              Archivia qui tutti i tuoi dati in modo tale da <br />
              tenere sempre d'occhio i tuoi documenti delle
              <br />
              tue visite dolor sit amet, consectetur adipisici <br />
              elit, sed eiusmod tempor incidunt ut labore
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="textarchivio">
            <h1 className="colortext">Archivia!</h1>
            <p>
              Archivia qui tutti i tuoi dati in modo tale da <br />
              tenere sempre d'occhio i tuoi documenti delle
              <br />
              tue visite dolor sit amet, consectetur adipisici <br />
              elit, sed eiusmod tempor incidunt ut labore
            </p>
          </div>
          <img src={Calendar} alt="Calendario" className="Calendar" />
        </Col>
      </div>
      <div className="medicbanner">
        <h2 className="texmedic">Sei un medico , lascia la tua mail !</h2>
        <div className="input">
          <MdEmail className="icon" />
          <input type="email" placeholder="Email" />
        </div>
      </div>
    </section>
  );
};

export default AccessPage;