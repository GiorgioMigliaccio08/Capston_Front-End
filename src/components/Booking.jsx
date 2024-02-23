import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Logo from "../assets/Logo.svg";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../assets/style/Booking.css";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(null);
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [formData, setFormData] = useState({
    visitType: "",
    data: "",
    location: "",
  });

  // FUNZIONE PER SALVARE UNA PRENOTAZIONE IN DB :

  const addPrenotazione = () => {
    fetch("http://localhost:3001/prenotazioni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore!");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // FUNZIONE PER RECUPERARE TUTTE LE PRENOTAZIONE IN DB :
  const getAllPrenotazioni = () => {
    fetch("http://localhost:3001/users/bookings", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore!");
        }
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // FUNZIONE PER MODIFICARE UNA PRENOTAZIONE IN DB :

  // FUNZIONE PER ELIMINARE UNA PRENOTAZIONE IN DB :

  const body = {
    luogo: formData.location,
    data: formData.data,
    tipoVisita: formData.visitType,
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEvent = () => {
    addPrenotazione();
    setShowAddEventForm(false);
    getAllPrenotazioni();
  };

  useEffect(() => {
    getAllPrenotazioni();
  }, []);
  return (
    <div className="pageprenotazioni">
      <div className="partealtaprenotazioni ">
        <div>
          <img src={Logo} alt="Logo" className="Logo2" />
        </div>
        <div className="linkprenotazionebooking">
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
          </Nav>
        </div>
      </div>
      <div className="app">
        <header className="header">
          <h1>Il mio calendario delle prenotazioni:</h1>
          <button
            className="add-event-button"
            onClick={() => setShowAddEventForm(true)}
          >
            Aggiungi Prenotazione +
          </button>
        </header>
        <div className="content">
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          {showAddEventForm && (
            <div className="add-event-form">
              <h2>Informazioni Prenotazione : </h2>
              <select
                name="visitType"
                value={formData.visitType}
                onChange={handleInputChange}
              >
                <option value="">Seleziona tipo di visita</option>
                <option value="Visita di controllo">Visita di controllo</option>
                <option value="Tac">Tac</option>
                <option value="Vaccino">Vaccino</option>
                <option value="Radiografia">Radiografia</option>
                <option value="Risonanza Magnetica">Risonanza Magnetica</option>
                <option value="Ecografia">Ecografia</option>
                <option value="Oculistica">Oculistica</option>
                <option value="Mammografia">Mammografia</option>
                <option value="Endoscopia">Endoscopia</option>
                <option value="Colonoscopia">Colonoscopia</option>
                <option value="Elettrocardiogramma">Elettrocardiogramma</option>
                <option value="Analisi del sangue">Analisi del sangue</option>
                <option value="Dentistica">Dentistica</option>
                <option value="Ginecologica">Ginecologica</option>
                <option value="Urologica">Urologica</option>
                <option value="Ortopedica">Ortopedica</option>
                <option value="Dermatologica">Dermatologica</option>
                <option value="Altro">Altro</option>
              </select>
              <input
                type="date"
                name="data"
                placeholder="Data della visita : "
                value={formData.data}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Luogo della Visita :"
                value={formData.location}
                onChange={handleInputChange}
              />
              <button onClick={addEvent}>Aggiungi</button>
            </div>
          )}
        </div>
      </div>
      <h1 className="titleprontazioni">Le tue prenotazioni: </h1>
      {events && (
        <div className="event-list">
          {events.map((event, index) => (
            <div key={index} className="event">
              <div>
                <strong className="scritta">Tipo di Visita:</strong>{" "}
                <strong className="scrittadue">{event.tipoVisita}</strong>
              </div>
              <div>
                <strong className="scritta">Data:</strong>
                <strong className="scrittadue"> {event.data}</strong>
              </div>
              <div>
                <strong className="scritta">Luogo Visita:</strong>{" "}
                <strong className="scrittadue">{event.luogo}</strong>
              </div>
              <button type="submit" className="modify">
                Modifica
              </button>
              <button type="submit" className="delete">
                Elimina
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
