import { useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Logo from "../assets/Logo.svg";
import Cartella from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import "../assets/style/AccessPage.css";
import Footer from "../components/Footer";

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
            <Link to="/Homepage">
              <button className="buttunaccess1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  color=" #00aeb5"
                  fill="currentColor"
                  className="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                <p className="textaccess">Home</p>
              </button>
            </Link>
            <Link to="/Prenotazioni">
              <button className="buttunaccess1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  color=" #00aeb5"
                  fill="currentColor"
                  className="bi bi-calendar-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0" />
                </svg>
                <p className="textaccess">Prenotazioni</p>
              </button>
            </Link>
            <Link to="/Archivio">
              <button className="buttunaccess1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  color=" #00aeb5"
                  fill="currentColor"
                  className="bi bi-archive-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
                <p className="textaccess">Archivio</p>
              </button>
            </Link>
            <button className="Logoutbt" onClick={handleLogoutClick}>
              Logout
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/Login">
                  <button className="logoutpage" onClick={handleLogout}>
                    Esci
                  </button>
                </Link>
              </div>
            )}
          </Nav>
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
