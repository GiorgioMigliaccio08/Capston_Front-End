import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import { Nav, Card } from "react-bootstrap";
import "../assets/style/Archive.css";
import { Link } from "react-router-dom";

const Archive = () => {
  const [showForm, setShowForm] = useState(false);
  const [documento, setDocumento] = useState(null);
  const [alldocumenti, setDocumenti] = useState(null);

  // FUNZIONE PER SALVARE UN DOCUMENTO IN DB :

  const addDocumento = () => {
    fetch("http://localhost:3001/archiviazione", {
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
        setDocumento(data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // FUNZIONE PER RECUPERARE TUTTI I DOCUMENTI IN DB :
  const getAlldocumenti = () => {
    fetch("http://localhost:3001/users/documents", {
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
        setDocumenti(data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  // FUNZIONE PER MODIFICARE UN DOCUMENTO IN DB :

  // FUNZIONE PER ELIMINARE UN DOCUMENTOE IN DB :

  const [luogoVisita, setluogoVisita] = useState("");
  const [dataVisitaEffettuata, setdataVisitaEffettuata] = useState("");
  const [dataVisitaControllo, setdataVisitaControllo] = useState("");
  const [tipoVisitaEffettuata, settipoVisitaEffettuata] = useState("");

  const body = {
    luogoVisita: luogoVisita,
    dataVisitaEffettuata: dataVisitaEffettuata,
    dataVisitaControllo: dataVisitaControllo,
    tipoVisitaEffettuata: tipoVisitaEffettuata,
  };

  const handleAddDocumentClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addDocumento();
    setShowForm(false);
    getAlldocumenti();
  };

  useEffect(() => {
    getAlldocumenti();
  }, []);

  return (
    <div className="ArchivePage">
      <div className="partealtaprenotazioni ">
        <div>
          <img src={Logo} alt="Logo" className="Logo2" />
        </div>
        <div className="linkprenotazionearchive">
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
      <div className="apparchive">
        <header className="headerarchive">
          <h1>Archivia una Visita:</h1>
          <button
            className="add-event-button-archive"
            onClick={handleAddDocumentClick}
          >
            Aggiungi Visita +
          </button>
        </header>
        <div className="contentarchive">
          {showForm && (
            <div className="form-container">
              <h1 className="titleArc">Informazioni Visita :</h1>
              <form className="document-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Luogo Visita:
                    <input
                      type="text"
                      name="luogoVisita"
                      className="form-input"
                      onChange={(e) => {
                        setluogoVisita(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Data Visita Effettuata:
                    <input
                      type="date"
                      name="dataVisitaEffettuata"
                      className="form-input"
                      onChange={(e) => {
                        setdataVisitaEffettuata(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Data Visita di Controllo:
                    <input
                      type="date"
                      name="dataVisitaControllo"
                      className="form-input"
                      onChange={(e) => {
                        setdataVisitaControllo(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Tipo di Visita Effettuata:
                    <input
                      type="text"
                      name="tipoVisitaEffettuata"
                      className="form-input"
                      onChange={(e) => {
                        settipoVisitaEffettuata(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <button type="submit" className="submit-button-archive">
                  Salva
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <h1 className="titleprontazioni">Le tue visite precedenti:</h1>
      {alldocumenti && (
        <div className="card-container">
          {alldocumenti.map((documento, i) => {
            return (
              <Card>
                <Card.Body>
                  <Card.Text>
                    <strong className="scrittaA">Luogo Visita:</strong>{" "}
                    <strong className="scrittadueA">
                      {documento.luogoVisita}
                    </strong>
                    <br />
                    <strong className="scrittaA">
                      Data Visita Effettuata:
                    </strong>
                    <strong className="scrittadueA">
                      {documento.dataVisitaEffettuata}
                    </strong>
                    <br />
                    <strong className="scrittaA">
                      Data Visita di Controllo:
                    </strong>
                    <strong className="scrittadueA">
                      {" "}
                      {documento.dataVisitaControllo}
                    </strong>
                    <br />
                    <strong className="scrittaA">
                      Tipo di Visita Effettuata:
                    </strong>
                    <strong className="scrittadueA">
                      {" "}
                      {documento.tipoVisitaEffettuata}
                    </strong>
                  </Card.Text>
                  <button type="submit" className="modifyA">
                    Modifica
                  </button>
                  <button type="submit" className="deleteA">
                    Elimina
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Archive;
