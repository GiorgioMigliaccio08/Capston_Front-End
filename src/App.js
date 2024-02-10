import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/Login" />
          <Route element={<Homepage />} path="/Homepage" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
