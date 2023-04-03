import React, { useState } from "react";
import pic from "../images/house_Predictions.png";
import "./css/login.css";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    
    <div className="container">
      <div className="imgContainer" >
        <img id="house_Predictions" src={pic} alt="house" />
      </div>
      {showLogin ? (
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <label className="margin-top" htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" name="login-username" required />

            <label className="margin-top" htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" required />
               
            <button type="submit">Login</button>
          </form>
          <p> <br></br>
            Don't have an account?{" "}
            <button onClick={toggleForm}>Sign up</button>
          </p>
        </div>
        
      ) : (
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form>
            <label className="margin-top" htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" name="signup-name" required />

            <label className="margin-top" htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="signup-email" required />

            <label className="margin-top" htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="signup-password" required />

            <button type="submit">Sign Up</button>
          </form>
          <p> <br></br>
            Already have an account?{" "}
            <button onClick={toggleForm}>Login</button>
          </p>
         
        </div>
      )}
    </div>
  );
};


