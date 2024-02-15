import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import AccessPage from "./components/AccessPage";
import Booking from "./components/Booking";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<AccessPage />} path="/Homepage" />
          <Route element={<Booking />} path="/Prenotazioni" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
