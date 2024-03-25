import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
  trustWallet,
  rainbowWallet,
  phantomWallet,
  lightTheme,
} from "@thirdweb-dev/react";
import "./styles/Home.css";

const smartWalletOptions = {
  factoryAddress: "0x83eE9EF2CE5072F44FD14bf575CA6bB2D704F734",
  gasless: true,
};

export default function Home() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="ecdb63b562523a1c1cf3fe1bbdc33ad0"
      locale={en()}
      supportedWallets={[
        smartWallet(
          metamaskWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          coinbaseWallet({ recommended: true }),
          smartWalletOptions,
        ),
        smartWallet(
          walletConnect(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet({
            auth: {
              options: [
                "email",
                "google",
                "apple",
                "facebook",
              ],
            },
          }),
          smartWalletOptions,
        ),
        smartWallet(
          trustWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          rainbowWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          phantomWallet(),
          smartWalletOptions,
        ),
      ]}
      authConfig={{
        authUrl: "/api/auth",
        domain: "https://example.com",
      }}
    >
      <ConnectWallet
        theme={lightTheme({
          colors: {
            primaryButtonBg: "#280764",
            primaryText: "#18043e",
          },
        })}
        modalTitle={"TiFi Market"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"wide"}
        welcomeScreen={{
          subtitle: "",
          img: {
            src: "https://tarwar.com/tifi/tf.png",
            width: 150,
            height: 150,
          },
        }}
        modalTitleIconUrl={
          "https://tarwar.com/tifi/img/tifi.png"
        }
      />
    </ThirdwebProvider>
  );
}

