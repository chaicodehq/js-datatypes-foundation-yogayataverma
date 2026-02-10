export function getChaiOrderLength(order) {
  if (typeof order !== 'string') return -1;
  const trimmed = order.trim();
  return trimmed.length;
}

export function shoutChaiOrder(order) {
  if (typeof order !== 'string') return '';
  const trimmed = order.trim();
  if (!trimmed) return '';
  return trimmed.toUpperCase();
}

export function whisperChaiOrder(order) {
  if (typeof order !== 'string') return '';
  const trimmed = order.trim();
  if (!trimmed) return '';
  return trimmed.toLowerCase();
}

export function hasSpecialIngredient(order, ingredient) {
  if (typeof order !== 'string' || typeof ingredient !== 'string') return false;
  return order.toLowerCase().includes(ingredient.toLowerCase());
}

export function getFirstAndLastChar(order) {
  if (typeof order !== 'string') return null;
  const trimmed = order.trim();
  if (!trimmed) return null;
  return { first: trimmed.charAt(0), last: trimmed.at(-1) };
}
