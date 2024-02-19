import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import AccessPage from "./components/AccessPage";
import Booking from "./components/Booking";
import Archive from "./components/Archive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<AccessPage />} path="/homepage" />
          <Route element={<Booking />} path="/prenotazioni" />
          <Route element={<Archive />} path="/archivio" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
