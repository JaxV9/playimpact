import WalletContext from "@/contexts/walletContext";
import { useContext } from "react";


export const Wallet = () => {

    const { walletValue } = useContext(WalletContext)!;

    return(
        <>
            <div className="walletContainer">
                <div className="walletIcon"></div>
                <div className="walletValue">{walletValue} pts</div>
            </div>
        </>
    )
}