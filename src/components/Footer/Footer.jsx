import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
            <img src="./logo.png" alt="" width={150} />
        </div>

        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">145 Bangalore, Karnataka, India</span>
            <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Footer;