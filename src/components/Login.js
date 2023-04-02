import React, { useState } from "react";
import "./css/login.css";

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container">
      {showLogin ? (
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" name="login-username" required />

            <label htmlFor="login-password">Password:</label>
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
            <label htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" name="signup-name" required />

            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="signup-email" required />

            <label htmlFor="signup-password">Password:</label>
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


