import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Predict } from "../components/Predict";
import { Login } from "../components/Login";

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Predict" element={<Predict />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
