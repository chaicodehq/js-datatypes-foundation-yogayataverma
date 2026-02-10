export function parseFare(fareString) {
  if (typeof fareString !== 'string') return -1;
  const parsed = parseFloat(fareString);
  return Number.isNaN(parsed) ? -1 : parsed;
}

export function roundFare(amount, decimalPlaces) {
  if (typeof amount !== 'number' || !Number.isInteger(decimalPlaces) || decimalPlaces < 0) return '';
  return amount.toFixed(decimalPlaces);
}

export function calculateSurge(baseFare, surgeMultiplier) {
  if (typeof baseFare !== 'number' || typeof surgeMultiplier !== 'number') return 0;
  if (baseFare <= 0 || surgeMultiplier <= 0) return 0;
  return Math.ceil(baseFare * surgeMultiplier);
}

export function findCheapestAndCostliest(...fares) {
  const validFares = fares.filter((fare) => typeof fare === 'number' && Number.isFinite(fare));
  if (validFares.length === 0) return null;
  return {
    cheapest: Math.min(...validFares),
    costliest: Math.max(...validFares),
  };
}

export function getDistanceDifference(from, to) {
  const start = parseInt(from, 10);
  const end = parseInt(to, 10);
  if (Number.isNaN(start) || Number.isNaN(end)) return -1;
  return Math.abs(start - end);
}
