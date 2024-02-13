import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import AccessPage from "./components/AccessPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<Login />} path="/Login" />
          <Route element={<AccessPage />} path="/Homepage" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
