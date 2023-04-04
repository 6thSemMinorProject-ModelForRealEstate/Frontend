import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Predict } from "../components/Predict";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import {AddHouse} from "../components/AddHouse";
import { useEffect, useState } from "react";

function AppRoutes() {
  const [isLogin, setIsLogin] =  useState(false);
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"))
    
    if(user && user.token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  },[])

  return (
    <Router>
      <NavBar isLogin = {isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Predict" element={<Predict />} />
        <Route path="/Login" element={<Login setIsLogin = {setIsLogin} />} />
        <Route path="/Signup" element={<Signup setIsLogin = {setIsLogin} />} />
        <Route path={isLogin?"/AddHouse":"/"} element={<AddHouse setIsLogin = {setIsLogin} />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
