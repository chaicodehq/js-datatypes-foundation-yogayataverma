export function parcelToJSON(parcel) {
  if (parcel === undefined) return '';
  try {
    return JSON.stringify(parcel);
  } catch (err) {
    return '';
  }
}

export function jsonToParcel(jsonString) {
  if (typeof jsonString !== 'string' || jsonString.length === 0) return null;
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    return null;
  }
}

export function convertToString(value) {
  return String(value);
}

export function convertToNumber(value) {
  return Number(value);
}

export function stringToChars(str) {
  if (typeof str !== 'string') return [];
  return Array.from(str);
}
