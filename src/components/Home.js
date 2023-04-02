import React from "react";
import pic from "../images/house.png";
import "./css/home.css";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h6 className="homePageHeading">Real Estate Price Predictor</h6>
      <div className="imgContainer" >
        <img id="homePageImage" src={pic} alt="house" />
      </div>
    </div>
  );
};