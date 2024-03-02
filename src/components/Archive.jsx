import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import { Nav, Card } from "react-bootstrap";
import "../assets/style/Archive.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { IoHome } from "react-icons/io5";
import { FaCalendarPlus } from "react-icons/fa";
import { RiArchive2Fill } from "react-icons/ri";

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

  // FUNZIONE PER ELIMINARE UN DOCUMENTOE IN DB :
  const deleteDocumento = (documentoId) => {
    const isConfirmed = window.confirm(
      "Sei sicuro di voler eliminare il Documento?"
    );

    if (isConfirmed) {
      fetch(`http://localhost:3001/archiviazione/${documentoId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.ok) {
            console.log("Eliminato!");
            window.location.reload();
          } else {
            throw new Error("Errore!");
          }
        })
        .catch((er) => {
          console.log(er);
        });
    }
  };

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

                  <button
                    type="submit"
                    className="deleteA"
                    onClick={() => deleteDocumento(documento.id)}
                  >
                    Elimina
                  </button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
      <div className="footerarchive">
        <Footer />
      </div>
    </div>
  );
};

export default Archive;
