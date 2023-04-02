import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AvailableHouses } from "./components/Pages/AvailableHouses";
import { Login} from "./components/Pages/Login";

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
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
