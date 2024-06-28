'use client';
import React from 'react';

type WalletContextType = {
    walletValue: number,
    setWalletValue: (value: number) => void
}

const WalletContext = React.createContext<WalletContextType | null>(null);

export default WalletContext;