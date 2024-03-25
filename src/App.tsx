import { ConnectButton } from "thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
          </h1>
          <div className="connect">
            <ConnectButton />
          </div>
        </div>
      </div>
    </main>
  );
}
