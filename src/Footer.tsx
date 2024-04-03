import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", position: "fixed", bottom: 0, left: 0, width: "100%", textAlign: "center" }}>
      <div>
        <a href="#"><FaFacebook size={24} style={{ marginRight: "10px" }} /></a>
        <a href="#"><FaTwitter size={24} style={{ marginRight: "10px" }} /></a>
        <a href="#"><FaInstagram size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;
