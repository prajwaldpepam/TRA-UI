import React from "react";
import "./Footer.css";
import logo from "./img/Gold_and_Black_Plane_Travel_Creative_Logo__2_-removebg-preview.png";
import travleImg from './img/travel.jpg'
const Footer: React.FC = () => {
  return (
    <div className="main-container">
      <footer>
        <div className="contact-info">
          <img src={logo} alt="logo" />
          <pre>
            5th flora, 700/D kings road, green
            
          </pre>
        </div>

        <div className="company-info">
          <h3>Company</h3>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="popular-destinations">
          <h3>Popular destination</h3>
          <div className="destination-subcontainer">
            <ul>
              <li>Indonesia</li>
              <li>India</li>
              <li>France</li>
              <li>Italy</li>
            </ul>
            <ul>
              <li>America</li>
              <li>Switzerland</li>
              <li>Canada</li>
              <li>England</li>
            </ul>
          </div>
        </div>

        <div className="img-section">
            <h3>Instagram</h3>
           <div className="img-div">
                <div>
                    <img src={travleImg}></img>
                    <img src={travleImg}></img>
                    <img src={travleImg}></img>
                </div>
                <div>
                    <img src={travleImg}></img>
                    <img src={travleImg}></img>
                    <img src={travleImg}></img>
                </div>
                
           </div>

        </div>
      </footer>
      <div className="copyright">
        <p>
        Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
      </div>
    </div>
  );
};

export default Footer;
