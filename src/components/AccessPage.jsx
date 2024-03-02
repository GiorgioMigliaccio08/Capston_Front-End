import { useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/Logo.svg";
import Cartella from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import "../assets/style/AccessPage.css";
import Footer from "../components/Footer";
import { IoHome } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { RiArchive2Fill } from "react-icons/ri";

export const AccessPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogoutClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implementa qui la logica per il logout
    console.log("Logout eseguito");
  };

  return (
    <section className="AccessPage">
      <div className="background-image"></div>
      <div className="upperpart">
        <Col lg={6} md={4}>
          <img src={Logo} alt="Logo" className="Logo" />
          <h1 className="Title">Bentornato!</h1>
          <p className="Description">
            Heart Archive Hub, è il tuo rifugio digitale per <br />
            conservare tutti i tuoi documenti medici in un unico <br />
            luogo sicuro e accessibile,insieme alla gestione
            <br />
            semplice e intuitivadei tuoi prossimi appuntamenti.
          </p>
        </Col>
        <Col lg={6} md={4}>
          <Nav className="navlinks">
            <Link to="/Homepage" style={{ textDecoration: "none" }}>
              <div className="links">
                <IoHome
                  style={{
                    fontSize: "35px",
                    marginRight: "10px",
                    color: "#0089DC",
                  }}
                />
                Home
              </div>
            </Link>
            <Link to="/Prenotazioni" style={{ textDecoration: "none" }}>
              <div className="links">
                <FaCalendarPlus
                  style={{
                    fontSize: "35px",
                    marginRight: "10px",
                    color: "#0089DC",
                  }}
                />
                Prenotazioni
              </div>
            </Link>
            <Link to="/Archivio" style={{ textDecoration: "none" }}>
              <div className="links">
                <RiArchive2Fill
                  style={{
                    fontSize: "35px",
                    marginRight: "8px",
                    color: "#0089DC",
                  }}
                />{" "}
                Archivio
              </div>
            </Link>
            <button className="Logoutbt" onClick={handleLogoutClick}>
              Logout
            </button>
          </Nav>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/Login">
                <button className="logoutpage" onClick={handleLogout}>
                  Esci
                </button>
              </Link>
            </div>
          )}
        </Col>
      </div>
      <div className="centerpart">
        <Col lg={6}>
          <img src={Cartella} alt="Cartella" className="Folder" />
          <div className="textcalendar">
            <h1 className="colortext">Prenota & Ricorda !</h1>
            <p className="colortext1">
              Ti permette di prenotare e ricordare le <br />
              tue visite mediche selezionando la tipologia <br />
              di visita la data ed il luogo dela visita, <br />
              permettendoti di organizzare le tue prossime
              <br />
              visite in modo efficente!e
            </p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="textarchivio">
            <h1 className="colortext">Archivia!</h1>
            <p className="colortext1">
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
        <div>
          <h2 className="texmedic">Sei un medico , lascia la tua mail !</h2>
          <p className="texmedic2">
            Ti contatteremo al più presto per metterti in contatto con il tuo
            paziente.
          </p>
        </div>
        <div className="input2">
          <MdEmail className="icon" />
          <input type="email" placeholder="Email" className="emaillogin" />
        </div>
      </div>
      <div className="footerAccesspage">
        <Footer />
      </div>
    </section>
  );
};

export default AccessPage;
