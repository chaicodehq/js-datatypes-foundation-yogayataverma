export function createThaliDescription(thali) {
  if (
    typeof thali !== 'object' ||
    thali === null ||
    Array.isArray(thali) ||
    typeof thali.name !== 'string' ||
    !Array.isArray(thali.items) ||
    thali.items.length === 0 ||
    typeof thali.price !== 'number' ||
    typeof thali.isVeg !== 'boolean'
  ) {
    return '';
  }

  const name = thali.name.toUpperCase();
  const vegLabel = thali.isVeg ? 'Veg' : 'Non-Veg';
  const itemsList = thali.items.join(', ');
  const price = thali.price.toFixed(2);
  return `${name} (${vegLabel}) - Items: ${itemsList} - Rs.${price}`;
}

export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) return null;

  const totalThalis = thalis.length;
  const vegCount = thalis.filter((t) => t.isVeg).length;
  const nonVegCount = totalThalis - vegCount;
  const prices = thalis.map((t) => t.price);
  const cheapest = Math.min(...prices);
  const costliest = Math.max(...prices);
  const totalPrice = prices.reduce((sum, price) => sum + price, 0);
  const avgPrice = (totalPrice / totalThalis).toFixed(2);
  const names = thalis.map((t) => t.name);

  return { totalThalis, vegCount, nonVegCount, avgPrice, cheapest, costliest, names };
}

export function searchThaliMenu(thalis, query) {
  if (!Array.isArray(thalis) || typeof query !== 'string') return [];
  const q = query.toLowerCase();
  return thalis.filter((thali) => {
    const nameMatch = typeof thali.name === 'string' && thali.name.toLowerCase().includes(q);
    const itemMatch = Array.isArray(thali.items)
      ? thali.items.some((item) => typeof item === 'string' && item.toLowerCase().includes(q))
      : false;
    return nameMatch || itemMatch;
  });
}

export function generateThaliReceipt(customerName, thalis) {
  if (typeof customerName !== 'string') return '';
  if (!Array.isArray(thalis) || thalis.length === 0) return '';

  const customer = customerName.toUpperCase();
  const lineItems = thalis.map((thali) => `- ${thali.name} x Rs.${thali.price}`);
  const total = thalis.reduce((sum, thali) => sum + (typeof thali.price === 'number' ? thali.price : 0), 0);
  const count = thalis.length;

  return `THALI RECEIPT\n---\nCustomer: ${customer}\n${lineItems.join('\n')}\n---\nTotal: Rs.${total}\nItems: ${count}`;
}
