import React, { useState } from "react";
import pic from "../images/house_Predictions.png";
import "./css/login.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  
  const navigate = useNavigate();
  


  return (
    
    <div className="container">
      <div className="imgContainer" >
        <img id="house_Predictions" src={pic} alt="house" />
      </div>
      
        <div className="signup-box">
          <h2>Sign Up</h2>
          <div className="form">
            <label className="margin-top" htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" name="signup-name" required />

            <label className="margin-top" htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="signup-email" required />

            <label className="margin-top" htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="signup-password" required />

            <button className="submitButton" >Sign Up</button>
          </div>
          <p> <br></br>
            Already have an account?{" "}
            <button onClick={()=>navigate("/Login")}>Login</button>
          </p>
         
        </div>
      
    </div>
  );
};


