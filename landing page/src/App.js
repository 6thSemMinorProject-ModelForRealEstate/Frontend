import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AvailableHouses } from "./components/Pages/AvailableHouses";
import { Login} from "./components/Pages/Login";
import { AddHouse } from "./components/Pages/AddHouse";

function App() {
  return (
    
    <>
     
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AvailableHouses" element={<AvailableHouses />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AddHouse" element={<AddHouse />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
