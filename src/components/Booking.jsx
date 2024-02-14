import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    place: "",
    date: "",
    visitType: "Tac",
  });
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Prenotazione aggiunta:", bookingDetails);
  };

  const handleMonthChange = (event) => {
    setCurrentMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setCurrentYear(event.target.value);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = () => {
    return new Date(currentYear, currentMonth, 1).getDay();
  };

  const generateCalendar = () => {
    const firstDayOfMonth = getFirstDayOfMonth();
    const totalDays = daysInMonth(currentMonth, currentYear);
    const calendar = [];
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
    let dayOfWeekIndex = daysOfWeek.indexOf("Gio");

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div key={`empty-${i}`} className="day empty"></div>);
      dayOfWeekIndex = dayOfWeekIndex === 6 ? 0 : dayOfWeekIndex + 1;
    }

    for (let i = 1; i <= totalDays; i++) {
      calendar.push(
        <div
          key={i}
          className={`day ${
            dayOfWeekIndex === 6 || dayOfWeekIndex === 0 ? "weekend" : ""
          }`}
          onClick={() =>
            handleDateSelect(new Date(currentYear, currentMonth, i))
          }
        >
          {i}
        </div>
      );
      dayOfWeekIndex = dayOfWeekIndex === 6 ? 0 : dayOfWeekIndex + 1;
    }

    return calendar;
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="calendar">
            <div className="month">
              <div className="month-name">
                <select value={currentMonth} onChange={handleMonthChange}>
                  <option value={0}>Gennaio</option>
                  <option value={1}>Febbraio</option>
                  <option value={2}>Marzo</option>
                  <option value={3}>Aprile</option>
                  <option value={4}>Maggio</option>
                  <option value={5}>Giugno</option>
                  <option value={6}>Luglio</option>
                  <option value={7}>Agosto</option>
                  <option value={8}>Settembre</option>
                  <option value={9}>Ottobre</option>
                  <option value={10}>Novembre</option>
                  <option value={11}>Dicembre</option>
                </select>
                <select value={currentYear} onChange={handleYearChange}>
                  {Array.from({ length: 31 }, (v, i) => (
                    <option key={2020 + i} value={2020 + i}>
                      {2020 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="days">
                {["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"].map(
                  (day) => (
                    <div key={day} className="day">
                      {day}
                    </div>
                  )
                )}
                {generateCalendar()}
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="formprenotazione">
          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="singleform">Luogo della prenotazione:</label>
              <input
                type="text"
                className="form-control"
                name="place"
                value={bookingDetails.place}
                onChange={handleInputChange}
                placeholder="Inserisci il luogo"
              />
            </div>
            <div className="form-group">
              <label className="singleform">Data della prenotazione:</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="singleform">Tipo di visita:</label>
              <select
                className="form-control"
                name="visitType"
                value={bookingDetails.visitType}
                onChange={handleInputChange}
              >
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
            </div>
            <Button variant="primary" type="submit">
              Prenota
            </Button>
          </Form>
          {selectedDate && (
            <p>Data selezionata: {selectedDate.toLocaleDateString()}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
