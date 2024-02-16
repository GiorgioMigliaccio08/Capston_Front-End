import React, { useState } from "react";
import Calendar from "react-calendar";
import Logo from "../assets/Logo.svg";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    visitType: "",
    doctor: "",
    location: "",
  });

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEvent = () => {
    const newEvent = {
      ...formData,
      visitDate: date.toLocaleDateString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setEvents([...events, newEvent]);
    setShowAddEventForm(false);
    setFormData({
      name: "",
      surname: "",
      visitType: "",
      doctor: "",
      location: "",
    });
  };

  return (
    <div className="pageprenotazioni">
      <div className="partealtaprenotazioni ">
        <div>
          <img src={Logo} alt="Logo" className="Logo2" />
        </div>
        <div className="linkprenotazione">
          <Nav className="navlinks">
            <Link to="/Homepage">
              <Nav.Link href="home" className="navlink2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color=" #withe"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                Home
              </Nav.Link>
            </Link>
            <Link to="/Prenotazioni">
              <Nav.Link href="booking" className="navlink2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color=" withe"
                  fill="currentColor"
                  class="bi bi-calendar-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0" />
                </svg>
                Prenotazioni
              </Nav.Link>
            </Link>
            <Link to="/Archivio">
              <Nav.Link href="archive" className="navlink2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color=" withe"
                  fill="currentColor"
                  class="bi bi-archive-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
                Archivio
              </Nav.Link>
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
                type="text"
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
          <div className="event-list">
            {events.map((event, index) => (
              <div key={index} className="event">
                <strong style={{ color: "blue" }}>{event.visitDate}</strong>
                <div>
                  <strong>Tipo di Visita:</strong> {event.visitType}
                </div>
                <div>
                  <strong>Data:</strong> {event.data}
                </div>
                <div>
                  <strong>Luogo Visita:</strong> {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
