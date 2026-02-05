import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &#169; {new Date().getFullYear()} Edusity. All right reserved. Made with{" "}
        <span style={{ color: "red" }}>❤️</span> by Ankit Gupta
      </p>
      <ul>
        <li>Term of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
