export function getFamilyNames(registry) {
  if (typeof registry !== 'object' || registry === null || Array.isArray(registry)) return [];
  return Object.keys(registry);
}

export function getAllFamilies(registry) {
  if (typeof registry !== 'object' || registry === null || Array.isArray(registry)) return [];
  return Object.values(registry);
}

export function getRationCardEntries(registry) {
  if (typeof registry !== 'object' || registry === null || Array.isArray(registry)) return [];
  return Object.entries(registry);
}

export function hasRationCard(registry, cardId) {
  if (typeof registry !== 'object' || registry === null || Array.isArray(registry)) return false;
  if (typeof cardId !== 'string') return false;
  return Object.prototype.hasOwnProperty.call(registry, cardId);
}

export function removeRationCard(registry, cardId) {
  if (typeof registry !== 'object' || registry === null || Array.isArray(registry)) return false;
  if (typeof cardId !== 'string') return false;
  if (!Object.prototype.hasOwnProperty.call(registry, cardId)) return false;
  delete registry[cardId];
  return true;
}
