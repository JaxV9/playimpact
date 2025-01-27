'use client';

import WalletContext from "@/contexts/walletContext";
import { ReactNode, useEffect, useState } from "react";
import { Wallet } from "../wallet/wallet";
import { Navbar } from "../navbar/navbar";

type LayoutChildrenPropsType = {
    children: ReactNode
}


export const LayoutChildren = ({ children }: LayoutChildrenPropsType) => {

    const [walletValue, setWalletValue] = useState<number>(0);

    useEffect(() => {
        const walletValue = localStorage.getItem("walletValue");
        if (walletValue !== null) {
            setWalletValue(Number(walletValue));
        }
    }, []);

    return (
        <>
            <WalletContext.Provider value={{ walletValue, setWalletValue }}>
                <Wallet />
                {children}
                <Navbar />
            </WalletContext.Provider>
        </>
    )
}