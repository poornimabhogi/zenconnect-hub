export const ZENCOIN_RATE = 0.5; // coins per $10 USD

export function calculateZenCoins(usdAmount: number): number {
  return (usdAmount / 10) * ZENCOIN_RATE;
}

export function formatZenCoins(coins: number): string {
  return coins.toFixed(2);
}