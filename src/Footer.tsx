import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", padding: "20px", position: "fixed", bottom: 0, left: 0, width: "100%", textAlign: "center" }}>
      <div>
        <span style={{ marginRight: "10px" }}>Facebook</span>
        <span style={{ marginRight: "10px" }}>Twitter</span>
        <span>Instagram</span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <span>&copy; ibrahim-car </span>
        <span style={{ marginLeft: "10px" }}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
