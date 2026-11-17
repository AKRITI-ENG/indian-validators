# indian-validators

Small, dependency-free functions to validate Indian phone numbers, PIN codes, PAN numbers and IFSC codes.

## Install

```bash
npm install indian-validators
```

## Usage

```js
const {
  isValidPhone,
  isValidPincode,
  isValidPAN,
  isValidIFSC,
} = require('indian-validators');

isValidPhone('+91 98765 43210'); // true
isValidPincode('110001');        // true
isValidPAN('ABCPE1234F');        // true
isValidIFSC('SBIN0001234');      // true

isValidPhone('12345');           // false
```

## Functions

| Function | Checks | Example of valid input |
|---|---|---|
| `isValidPhone(str)` | 10-digit mobile starting with 6-9, optional +91, 91 or 0 prefix | `9876543210` |
| `isValidPincode(str)` | 6 digits, first digit not 0 | `110001` |
| `isValidPAN(str)` | 5 letters, 4 digits, 1 letter, valid holder-type 4th letter | `ABCPE1234F` |
| `isValidIFSC(str)` | 4 letters, then 0, then 6 letters or digits | `SBIN0001234` |

All functions return `true` or `false`. They never throw, and any input that is not a string returns `false`.

## Note

These functions check the **format** only. They do not check that a phone number, PAN or IFSC actually exists.

## Development

```bash
npm test
```

## License

MIT