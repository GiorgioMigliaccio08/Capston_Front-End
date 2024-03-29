import { Col, Button } from "react-bootstrap";
import Logo from "../assets/Logo.svg";
import Cartella from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../assets/style/Homepage.css";
import Footer from "../components/Footer";

export const Homepage = () => {
  return (
    <section className="Homepage">
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
            <br /> dei tuoi prossimi appuntamenti medici.
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
            <p className="texts">
              Ti permette di prenotare e ricordare le <br />
              tue visite mediche selezionando la tipologia <br />
              di visita la data ed il luogo della visita, <br />
              permettendoti di organizzare le tue prossime
              <br />
              visite in modo efficente!
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="textarchivio">
            <h1 className="colortext">Archivia!</h1>
            <p className="texts">
              Ti permette di archiviare e di tener traccia
              <br />
              di tutte le tue visite mediche effettuate, <br />
              ed avere sempre a disposizione un resoconto <br />
              della tua storia clinica.Rappresenta un modo <br />
              pratico per gestire la tua salute nel tempo!
            </p>
          </div>
          <img src={Calendar} alt="Calendario" className="Calendar" />
        </Col>
      </div>
      <div className="medicbanner">
        <div className="immaginemedico"></div>
        <div>
          <h2 className="texmedic">Sei un medico , lascia la tua mail !</h2>
          <p className="texmedic2">
            Ti contatteremo al più presto per metterti in contatto con il tuo
            paziente.
          </p>
          <div className="input2">
            <MdEmail className="icon" />
            <input type="email" placeholder="Email" className="emaillogin" />
          </div>
        </div>
      </div>
      <div className="footerHomepage">
        <Footer />
      </div>
    </section>
  );
};

export default Homepage;
