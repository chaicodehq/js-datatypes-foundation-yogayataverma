export function addToCart(cart, item) {
  if (!Array.isArray(cart)) return -1;
  if (typeof item !== 'string' || item.length === 0) return cart.length;
  return cart.push(item);
}

export function addUrgentItem(cart, item) {
  if (!Array.isArray(cart)) return [];
  if (typeof item !== 'string' || item.length === 0) return cart;
  cart.unshift(item);
  return cart;
}

export function removeLastItem(cart) {
  if (!Array.isArray(cart) || cart.length === 0) return undefined;
  return cart.pop();
}

export function isInCart(cart, item) {
  if (!Array.isArray(cart)) return false;
  return cart.includes(item);
}

export function mergeCarts(cart1, cart2) {
  const a = Array.isArray(cart1) ? cart1 : [];
  const b = Array.isArray(cart2) ? cart2 : [];
  return a.concat(b);
}
