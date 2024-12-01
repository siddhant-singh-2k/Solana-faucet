import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    const {connection} = useConnection();


    async function sendAirdropToUser(){
        const amount = document.getElementById("publicKey").vlaue
        await connection.requestAirdrop(wallet.publicKey, amount *10000000)
        alert("Airdropped Done");
    }
    return <div>
        <input id = "publicKey" type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}> Send Airdrop </button>
    </div>
}