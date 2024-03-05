import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Logo from "../assets/Logo.svg";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../assets/style/Booking.css";
import Footer from "../components/Footer";
import { IoHome } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { RiArchive2Fill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState(null);
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  // USATI PER LA MODIFICA:
  const [editEventId, setEditEventId] = useState(null);
  const [editedFormData, setEditedFormData] = useState({});
  const [dataVisita, setdataVisita] = useState("");
  const [tipoVisita, settipoVisita] = useState("");
  const [luogoVisita, setluogoVisita] = useState("");

  const payloadModifica = {
    Luogo: luogoVisita,
    Data: dataVisita,
    tipoVisita: tipoVisita,
  };

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
        Swal.fire({
          title: "Success!",
          text: "Prenotazione aggiunta con successo!",
          icon: "success",
        });
      })
      .catch((er) => {
        console.log(er);
        Swal.fire({
          title: "Errore!",
          text: "Si è verificato un errore durante l'aggiunta della prenotazione.",
          icon: "error",
        });
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
  const modifyPrenotazione = (eventId) => {
    console.log(eventId);
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditEventId(eventId);
    setEditedFormData({
      visitType: eventToEdit.tipoVisita,
      data: eventToEdit.data,
      location: eventToEdit.luogo,
    });
  };

  const submitEditEvent = (id) => {
    fetch(`http://localhost:3001/prenotazioni/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(payloadModifica),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Prenotazione modificata con successo!");
          return res.json();
        } else {
          throw new Error("Errore!");
        }
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "Prenotazione modificata con successo!",
          icon: "success",
        });
        window.location.reload();
      })
      .catch((er) => {
        console.log(er);
        Swal.fire({
          title: "Errore!",
          text: "Si è verificato un errore durante la modifica della prenotazione.",
          icon: "error",
        });
      });
  };

  console.log(formData);

  // FUNZIONE PER ELIMINARE UNA PRENOTAZIONE IN DB :
  const deletePrenotazione = (eventId) => {
    Swal.fire({
      title: "Eliminare la prenotazione?",
      text: "Questa azione non può essere annullata!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sì, elimina!",
      cancelButtonText: "Annulla",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/prenotazioni/${eventId}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((res) => {
            if (res.ok) {
              console.log("Prenotazione eliminata con successo!");
              const updatedEvents = events.filter(
                (event) => event.id !== eventId
              );
              setEvents(updatedEvents);
              Swal.fire(
                "Eliminato!",
                "La prenotazione è stata eliminata con successo.",
                "success"
              );
            } else {
              throw new Error(
                "Errore durante l'eliminazione della prenotazione."
              );
            }
          })
          .catch((er) => {
            console.log(er);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Si è verificato un errore durante l'eliminazione!",
            });
          });
      }
    });
  };

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
    <div>
      {" "}
      <ToastContainer />
      <div className="pageprenotazioni">
        <div className="partealtaprenotazioni ">
          <div>
            <img src={Logo} alt="Logo" className="Logo2" />
          </div>
          <div className="linkprenotazionebooking">
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
                  <option value="Visita di controllo">
                    Visita di controllo
                  </option>
                  <option value="Tac">Tac</option>
                  <option value="Vaccino">Vaccino</option>
                  <option value="Radiografia">Radiografia</option>
                  <option value="Risonanza Magnetica">
                    Risonanza Magnetica
                  </option>
                  <option value="Ecografia">Ecografia</option>
                  <option value="Oculistica">Oculistica</option>
                  <option value="Mammografia">Mammografia</option>
                  <option value="Endoscopia">Endoscopia</option>
                  <option value="Colonoscopia">Colonoscopia</option>
                  <option value="Elettrocardiogramma">
                    Elettrocardiogramma
                  </option>
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
                {editEventId === event.id ? (
                  <div className="edit-event-form">
                    <h2 className="writemodify">Modifica Prenotazione:</h2>
                    <input
                      type="text"
                      name="visitType"
                      placeholder="Tipo di visita:"
                      onChange={(e) => {
                        settipoVisita(e.target.value);
                      }}
                    />
                    <input
                      type="date"
                      className="datamodify"
                      name="data"
                      onChange={(e) => {
                        setdataVisita(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Luogo:"
                      onChange={(e) => {
                        setluogoVisita(e.target.value);
                      }}
                    />
                    <button
                      className="salvamodify"
                      onClick={() => {
                        submitEditEvent(event.id);
                      }}
                    >
                      Salva Modifiche
                    </button>
                  </div>
                ) : (
                  <>
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
                    <button
                      type="button"
                      className="modify"
                      onClick={() => modifyPrenotazione(event.id)}
                    >
                      Modifica
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => deletePrenotazione(event.id)}
                    >
                      Elimina
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="footerbooking">
          <Footer />;
        </div>
      </div>
    </div>
  );
};

export default Booking;
