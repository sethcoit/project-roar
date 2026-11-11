// Edit these as spots fill or terms change. When spotsRemaining reaches 0, the hero,
// sticky button and banner switch back to the standard audit automatically.
export const foundingOffer = {
  totalSpots: 3,
  spotsRemaining: 2,
  standardPrice: '$995',
  foundingPrice: '$495',
  fractionalFoundingPrice: '$1,200',
  fractionalRateLockMonths: 12,
  fractionalInitialTermMonths: 3,
};

export const foundingSpotsOpen = foundingOffer.spotsRemaining > 0;
