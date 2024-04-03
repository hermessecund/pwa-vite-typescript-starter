import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";
import "./styles/main.css";

// Path to logo and background image
const logoPath = "/images/logo.png";
const backgroundImagePath = "/images/ibc.png";

export default function Home() {
  return (
    <main className="main" style={{ backgroundImage: `url(${backgroundImagePath})` }}>
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logoPath} alt="Logo" />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {/* Connect Button */}
        <div className="connect">
          <ConnectWallet />
        </div>
      </nav>
      
      <div className="container">
        <div className="header">
          <h1 className="title">
            {/* Title Content */}
          </h1>
          <p className="description">
            Get started
          </p>
        </div>
      </div>
    </main>
  );
}
