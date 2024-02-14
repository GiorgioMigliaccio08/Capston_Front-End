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
    // Logic per gestire la prenotazione
    // Potresti voler inviare i dettagli della prenotazione al backend, aggiornare lo stato, ecc.
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
          {/* Calendario */}
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
                  {Array.from({ length: 10 }, (v, i) => (
                    <option key={i} value={currentYear + i}>
                      {currentYear + i}
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
        <Col md={6}>
          {/* Form di prenotazione */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formPlace">
              <Form.Label>Luogo della prenotazione</Form.Label>
              <Form.Control
                type="text"
                name="place"
                value={bookingDetails.place}
                onChange={handleInputChange}
                placeholder="Inserisci il luogo"
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Data della prenotazione</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formVisitType">
              <Form.Label>Tipo di visita</Form.Label>
              <Form.Control
                as="select"
                name="visitType"
                value={bookingDetails.visitType}
                onChange={handleInputChange}
              >
                <option value="Tac">Tac</option>
                <option value="Radiografia">Radiografia</option>
                <option value="Altro">Altro</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Prenota
            </Button>
          </Form>
          {/* Visualizzazione della data selezionata */}
          {selectedDate && (
            <p>Data selezionata: {selectedDate.toLocaleDateString()}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
