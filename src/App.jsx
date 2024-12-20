import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Airdrop } from "./Airdrop";
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="bg-gradient-to-br from-purple-900 via-black to-purple-900 min-h-screen">
            <header className="absolute inset-x-0 top-0 z-50">
              <nav className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <img
                      className="h-8 w-auto"
                      src="https://freebiehive.com/wp-content/uploads/2024/03/Solana-Round-White-Logo-PNG.jpg"
                      alt="Solana"
                    />
                  </a>
                </div>
                <div className="flex justify-end">
                  <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 rounded-lg" />
                </div>
              </nav>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Solana Devnet Airdrop
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Request test SOL tokens for development and testing on Solana's devnet.
                  </p>
                  <div className="mt-10">
                    <div className="rounded-2xl bg-gray-900/50 backdrop-blur-lg p-8 shadow-2xl ring-1 ring-white/10">
                      <Airdrop />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;