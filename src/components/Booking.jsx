import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
    <div className="app">
      <header className="header">
        <h1>Giorgio Calendar</h1>
        <button
          className="add-event-button"
          onClick={() => setShowAddEventForm(true)}
        >
          +
        </button>
      </header>
      <div className="content">
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        {showAddEventForm && (
          <div className="add-event-form">
            <h2>Aggiungi Evento</h2>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Cognome"
              value={formData.surname}
              onChange={handleInputChange}
            />
            <select
              name="visitType"
              value={formData.visitType}
              onChange={handleInputChange}
            >
              <option value="">Seleziona tipo di visita</option>
              <option value="Tac">Tac</option>
              <option value="Radiografia">Radiografia</option>
              <option value="Ecografia">Ecografia</option>
              <option value="Altro">Altro</option>
            </select>
            <input
              type="text"
              name="doctor"
              placeholder="Nome del Dottore"
              value={formData.doctor}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Luogo Visita"
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
                <strong>Nome:</strong> {event.name} {event.surname}
              </div>
              <div>
                <strong>Tipo di Visita:</strong> {event.visitType}
              </div>
              <div>
                <strong>Dottore:</strong> {event.doctor}
              </div>
              <div>
                <strong>Luogo Visita:</strong> {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
