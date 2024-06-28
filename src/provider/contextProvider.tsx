'use client';
import { ReactNode, useContext, useEffect, useState } from "react";
import React from "react";
import Head from 'next/head';
import WalletContext from "@/contexts/walletContext";

type ContextProviderPropsType = {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderPropsType) => {

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
                    {children}
            </WalletContext.Provider>
        </>
    )
}