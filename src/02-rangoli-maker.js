export function repeatPattern(pattern, times) {
  if (typeof pattern !== 'string' || !Number.isInteger(times) || times < 0) return '';
  return pattern.repeat(times);
}

export function extractRangoliCenter(design, start, end) {
  if (typeof design !== 'string' || typeof start !== 'number' || typeof end !== 'number') return '';
  return design.slice(start, end);
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  if (typeof colorString !== 'string') return '';
  return colorString.split(oldSep).join(newSep);
}

export function replaceRangoliColor(design, oldColor, newColor) {
  if (typeof design !== 'string' || typeof oldColor !== 'string' || typeof newColor !== 'string') return '';
  return design.replaceAll(oldColor, newColor);
}

export function makeRangoliBorder(char, length) {
  if (typeof char !== 'string' || typeof length !== 'number' || length <= 0) return '';
  if (char.length === 0) return '';
  const repeats = Math.ceil(length / char.length);
  return char.repeat(repeats).slice(0, length);
}
