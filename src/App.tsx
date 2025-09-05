import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CarDetail from "./pages/carDetail/CarDetail";
import FindCar from "./pages/findCar/FindCar";
import Register from "./pages/register/Register";
import Test from "./pages/test/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car/:name/:id" element={<CarDetail />} />
        <Route path="/findcar" element={<FindCar />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
