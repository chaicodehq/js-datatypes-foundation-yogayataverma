export function getItemNames(items) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => item.name);
}

export function getAffordableItems(items, maxPrice) {
  if (!Array.isArray(items) || typeof maxPrice !== 'number') return [];
  return items.filter((item) => typeof item.price === 'number' && item.price <= maxPrice);
}

export function calculateTotal(items) {
  if (!Array.isArray(items)) return 0;
  return items.reduce((sum, item) => {
    if (typeof item.price === 'number' && typeof item.qty === 'number') {
      return sum + item.price * item.qty;
    }
    return sum;
  }, 0);
}

export function sortByPrice(items, ascending) {
  if (!Array.isArray(items)) return [];
  const copy = [...items];
  copy.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
  return copy;
}

export function formatBill(items) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return items
    .map((item) => `${item.name} x ${item.qty} = Rs.${item.price * item.qty}`)
    .join('\n');
}
