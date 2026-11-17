function isValidPhone(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input.replace(/[\s-]/g, '');

  return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

function isValidPincode(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input.replace(/\s/g, '');

  return /^[1-9]\d{5}$/.test(cleaned);
}

function isValidPAN(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input.trim().toUpperCase();

  return /^[A-Z]{3}[PCHFATBLJG][A-Z]\d{4}[A-Z]$/.test(cleaned);
}

function isValidIFSC(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input.trim().toUpperCase();

  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(cleaned);
}

module.exports = { isValidPhone, isValidPincode, isValidPAN, isValidIFSC };