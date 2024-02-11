import { Col, Button } from "react-bootstrap";
import Logo from "../assets/Logo.svg";
import Cartella from "../assets/Cartella.jpg";
import Calendar from "../assets/Calendar.jpg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Link to="/Login">
            <Button className="butt1">Log-in</Button>
            <Button className="butt2">Sign-Up</Button>
          </Link>
        </Col>
      </div>
      <div className="centerpart">
        <Col lg={6}>
          <img src={Cartella} alt="Cartella" className="Folder" />
          <div className="textcalendar">
            <h1 className="colortext">Prenota & Ricorda !</h1>
            <p>
              Archivia qui tutti i tuoi dati in modo tale da tenere sempre
              d'occhio <br /> i tuoi documenti delle tue visite passate orem
              ipsum <br />
              dolor sit amet, consectetur adipisici elit, sed eiusmod tempor{" "}
              <br />
              incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam.
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="textarchivio">
            <h1 className="colortext">Archivia!</h1>
            <p>
              Archivia qui tutti i tuoi dati in modo tale da tenere sempre
              d'occhio <br /> i tuoi documenti delle tue visite passate orem
              ipsum <br />
              dolor sit amet, consectetur adipisici elit, sed eiusmod tempor{" "}
              <br />
              incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam.
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

export default Homepage;
