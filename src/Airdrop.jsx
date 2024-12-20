import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useEffect } from 'react';

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (wallet.publicKey) {
      connection.getBalance(wallet.publicKey).then(bal => {
        setBalance(bal / LAMPORTS_PER_SOL);
      });
    }
  }, [wallet.publicKey, connection]);

  async function sendAirdropToUser() {
    if (!wallet.publicKey) {
      alert("Please connect your wallet first");
      return;
    }
    const amount = document.getElementById("amount").value;
    try {
      await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
      alert("Airdrop Done");
      // Update balance after airdrop
      const newBalance = await connection.getBalance(wallet.publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
    } catch (error) {
      alert("Error sending airdrop: " + error.message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-white text-left">
        <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
          <span className="text-2xl font-bold">{balance}</span>
          <span className="ml-2 text-gray-400">SOL</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <input 
          id="amount" 
          type="text" 
          placeholder="Enter amount (SOL)"
          className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-200"
        />
        <button 
          onClick={sendAirdropToUser}
          className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
        >
          Request Airdrop
        </button>
      </div>
    </div>
  );
}