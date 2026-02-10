export function findPassenger(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== 'string') return undefined;
  const query = name.toLowerCase();
  return passengers.find((p) => typeof p.name === 'string' && p.name.toLowerCase() === query);
}

export function getPassengerIndex(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== 'string') return -1;
  const query = name.toLowerCase();
  return passengers.findIndex((p) => typeof p.name === 'string' && p.name.toLowerCase() === query);
}

export function isAnyWaitlisted(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false;
  return passengers.some((p) => p.status === 'waitlisted');
}

export function areAllConfirmed(passengers) {
  if (!Array.isArray(passengers) || passengers.length === 0) return false;
  return passengers.every((p) => p.status === 'confirmed');
}

export function getWaitlistedPassengers(passengers) {
  if (!Array.isArray(passengers)) return [];
  return passengers.filter((p) => p.status === 'waitlisted');
}
