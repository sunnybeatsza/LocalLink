import "./App.css";
import { Hero } from "./components/Hero";
import { Register } from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
