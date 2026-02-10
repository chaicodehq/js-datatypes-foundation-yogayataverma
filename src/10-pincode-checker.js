export function getDataType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

export function isValidParcelWeight(weight) {
  return typeof weight === 'number' && Number.isFinite(weight) && weight > 0;
}

export function isWholeNumber(value) {
  return Number.isInteger(value);
}

export function isNotANumber(value) {
  return Number.isNaN(value);
}

export function isTruthy(value) {
  return Boolean(value);
}
