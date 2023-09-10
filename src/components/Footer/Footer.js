import React from "react";
import {FiFacebook, FiInstagram} from 'react-icons/fi';
import logo from "../../assets/logo.png"

import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>the food hut manzini</h3>
            <p>Next to Police Headquarters, Opposite Value Auto</p>
            <p>Manzini, MA, Swaziland</p>
            <p>(+268) 7861 9303</p>
          </div>

          <div className="footer-grid-item">
            <h3>the food hut mbabane</h3>
            <p>OK Foods Complex. Above OK Liquor</p>
            <p>Mbabane, Mb, Swaziland</p>
            <p>(+268) 7812 4485</p>
          </div>

          <div className="footer-grid-item">
                <h3>Manzini</h3>
                <h3>Working Hours</h3>
                <p>Monday - Sunday:</p>
                <p>11:00 Am - 5:00 Pm</p>
                
            </div>

            <div className="footer-grid-item">
                <h3>Mbabane</h3>
                <h3>Working Hours</h3>
                <p>Saturday - Sunday:</p>
                <p>11:00 Am - 7:00 Pm</p>
            </div>

          <div className="footer-grid-item">
            <img src={logo} alt="company_logo" width={150}/>
            
          </div>
        </div>
      </div>
    

      <div className='footer__copyright'>
      <div className='footer-links-icons'>
                <FiFacebook />
                <FiInstagram />
      </div>
            <p style={{color: "white"}}>©2023 Fast Food Restaurant. All Rights Reserved</p>
      </div>

    </div>
  );
};

export default Footer;
