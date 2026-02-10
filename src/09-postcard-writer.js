export function writePostcard(sender, receiver, message) {
  if (typeof sender !== 'string' || typeof receiver !== 'string' || typeof message !== 'string') return '';
  const s = sender.trim();
  const r = receiver.trim();
  const m = message.trim();
  if (!s || !r || !m) return '';
  return `Priy ${r},\n\n${m}\n\nAapka/Aapki,\n${s}`;
}

export function isValidPincode(code) {
  if (typeof code !== 'string') return false;
  if (code.startsWith('0')) return false;
  if (code.length !== 6) return false;
  return /^\d{6}$/.test(code);
}

export function formatPostcardField(label, value, width) {
  if (typeof label !== 'string' || typeof value !== 'string') return '';
  const fieldWidth = typeof width === 'number' ? width : 12;
  return `${label.padEnd(fieldWidth)}: ${value}`;
}

export function isFromState(address, stateCode) {
  if (typeof address !== 'string' || typeof stateCode !== 'string') return false;
  return address.endsWith(stateCode);
}

export function countVowels(message) {
  if (typeof message !== 'string') return 0;
  const matches = message.match(/[aeiouAEIOU]/g);
  return matches ? matches.length : 0;
}
