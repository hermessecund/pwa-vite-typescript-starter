import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Home from "./App";
import "./styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { isInStandaloneMode } from "./utils";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

export default function App() {
  const [installPromptEvent, setInstallPromptEvent] = useState<
    any | undefined
  >();

  useEffect(() => {
    if (isInStandaloneMode()) {
      return;
    }

    const beforeInstallPromptListener = (event: any) => {
      event.preventDefault();
      setInstallPromptEvent(event);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstallPromptListener
      );
    };
  }, []);

  // Button click handler
  const handleInstallClick = () => {
    if (installPromptEvent && installPromptEvent.prompt) {
      installPromptEvent.prompt();
    }
  };

  // Checks if the app is openened in standalone mode or on browser
  return !isInStandaloneMode() ? (
    <main
      className="main"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('/images/bg.jpg')`, // Update the path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div
          className="header"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 className="title">
            Welcome to ib-car
          </h1>
          {installPromptEvent ? (
            <button
              id="install-button"
              className="installButton"
              onClick={handleInstallClick}
            >
              Install App
            </button>
          ) : (
            // The install prompt event is still experimental
            // and not supported by all browsers. You can ask
            // the user to manually install the app instead.
            <div style={{ maxWidth: 600, textAlign: "center" }}>
              Install this app by pressing the installation button on your
              browser's search bar or if on mobile, by adding the app to your
              home screen
            </div>
          )}
          <div className="map-container">
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13225.474096078236!2d-6.7491399!3d34.0344167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda741c7c4865a09%3A0x28359510c8b5cf49!2sIBRAHIM%20CAR!5e0!3m2!1sen!2sma!4v1712114584631!5m2!1sen!2sma"
  width="600"
  height="450"
  style={{ border: "0", borderRadius: "10px", background: "#f0f0f0", margin: "20px auto" }}
  allowFullScreen="" // Change allowfullscreen to allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>
             </div>
  </div>
    </main>
  ) : (
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Home />
    </ThirdwebProvider>
  );
}

window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
  // Reloading the page after installation to
  // dismiss the install button
  window.location.reload();
});

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
