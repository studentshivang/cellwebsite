import React from "react";
import Navbar from "./Navbar"; 
import Navsm from "./Navsm";


const Footer = () => {
  return (
    
    <>
  
      <div className="footer">
        <div className="text-area">
          <h5>©2022, Training & Placement Cell, MMMUT, Gorakhpur</h5>
        </div>
        <div className="footer_images">
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/facebook_objqnq.png"
            alt="Error loading "
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/linkedin_wboyqx.png"
            alt="Error loading "
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/email_buxtqz.png"
            alt="Error loading "
          />
          <img
            src="https://res.cloudinary.com/dd6idpm2e/image/upload/v1655502070/cell_website/globe_r355qa.png"
            alt="Error loading "
          />
        </div>
      </div>
    </>
  );
};


export default Footer;