const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidPhone, isValidPincode, isValidPAN } = require('./index');

test('accepts valid phone numbers', () => {
  assert.equal(isValidPhone('9876543210'), true);
  assert.equal(isValidPhone('+91 98765 43210'), true);
  assert.equal(isValidPhone('098765-43210'), true);
});

test('rejects invalid phone numbers', () => {
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('5876543210'), false);
  assert.equal(isValidPhone('98765432101'), false);
  assert.equal(isValidPhone(''), false);
  assert.equal(isValidPhone(9876543210), false);
});

test('accepts valid PIN codes', () => {
  assert.equal(isValidPincode('110001'), true);
  assert.equal(isValidPincode('560 001'), true);
});

test('rejects invalid PIN codes', () => {
  assert.equal(isValidPincode('012345'), false);
  assert.equal(isValidPincode('11000'), false);
  assert.equal(isValidPincode('1100011'), false);
  assert.equal(isValidPincode('11A001'), false);
  assert.equal(isValidPincode(110001), false);
});

test('accepts valid PAN numbers', () => {
  assert.equal(isValidPAN('ABCPE1234F'), true);
  assert.equal(isValidPAN('abcpe1234f'), true);
  assert.equal(isValidPAN(' ABCCE1234F '), true);
});

test('rejects invalid PAN numbers', () => {
  assert.equal(isValidPAN('ABCXE1234F'), false); 
  assert.equal(isValidPAN('ABCPE12345'), false); 
  assert.equal(isValidPAN('ABCPE123F'), false);  
  assert.equal(isValidPAN('1BCPE1234F'), false); 
  assert.equal(isValidPAN(''), false);
});