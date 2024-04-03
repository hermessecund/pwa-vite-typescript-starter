import { ConnectWallet } from "@thirdweb-dev/react";


// Path to logo and background image
const logoPath = "./images/logo.png";
const backgroundImagePath = "./images/ibc.png";

export default function Home() {
  return (
    <main className="main" style={{ backgroundImage: `url(${backgroundImagePath})` }}>
      {/* Navigation Bar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
         
        </div>
      
        {/* Connect Button */}
        <div className="connect">
          <ConnectWallet />
        </div>
      </nav>
      
      <div className="container">
        <div className="header">
          <h1 className="title">
            Title Content 
          </h1>
          <p className="description">
            Get started
          </p>
        </div>
      </div>

      {/* Responsive iframe */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.474096078236!2d-6.7491399!3d34.0344167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda741c7c4865a09%3A0x28359510c8b5cf49!2sIBRAHIM%20CAR!5e0!3m2!1sen!2sma!4v1712114584631!5m2!1sen!2sma"
          style={{ border: "2px solid", borderRadius: "10px", background: "#f0f0f0", margin: "20px auto", width: "100%", height: "500px" }} // Adjust height as needed
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
