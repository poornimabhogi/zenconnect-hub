import React, { createContext, useContext, useState } from 'react';
import { toast } from "@/components/ui/use-toast";

interface ZenCoinsContextType {
  coins: number;
  addCoins: (amount: number) => void;
  calculateCoinsFromUSD: (usdAmount: number) => number;
}

const ZenCoinsContext = createContext<ZenCoinsContextType | undefined>(undefined);

export function ZenCoinsProvider({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState(0);

  const calculateCoinsFromUSD = (usdAmount: number) => {
    // 0.5 coins per $10 USD
    return (usdAmount / 10) * 0.5;
  };

  const addCoins = (amount: number) => {
    setCoins(prev => {
      const newTotal = prev + amount;
      toast({
        title: "ZenCoins Updated",
        description: `You earned ${amount.toFixed(2)} ZenCoins! New balance: ${newTotal.toFixed(2)}`,
      });
      return newTotal;
    });
  };

  return (
    <ZenCoinsContext.Provider value={{ coins, addCoins, calculateCoinsFromUSD }}>
      {children}
    </ZenCoinsContext.Provider>
  );
}

export function useZenCoins() {
  const context = useContext(ZenCoinsContext);
  if (context === undefined) {
    throw new Error('useZenCoins must be used within a ZenCoinsProvider');
  }
  return context;
}