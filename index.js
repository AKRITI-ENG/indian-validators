function isValidPhone(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input.replace(/[\s-]/g, '');

  return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
}

module.exports = { isValidPhone };