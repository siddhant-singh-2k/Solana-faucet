import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();


    async function sendAirdropToUser(){
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount *LAMPORTS_PER_SOL)
        alert("Airdropped Done");
    }
    return <div>
        <input id = "publicKey" type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}> Send Airdrop </button>
    </div>
}