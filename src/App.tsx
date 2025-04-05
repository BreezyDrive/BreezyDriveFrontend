import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CarDetail from "./pages/carDetail/CarDetail";
import FindCar from "./pages/findCar/FindCar";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carDetail" element={<CarDetail />} />
        <Route path="/findcar" element={<FindCar />} />
      </Routes>
    </Router>
  );
}

export default App;
