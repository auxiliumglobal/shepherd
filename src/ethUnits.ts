import BN from 'bn.js';

export function stripHexPrefix(value: string) {
  return value.replace('0x', '');
}

type Wei = BN;

export const ETH_DECIMAL = 18;

const handleValues = (input: string | BN) => {
  if (typeof input === 'string') {
    return input.startsWith('0x')
      ? new BN(stripHexPrefix(input), 16)
      : new BN(input);
  }
  if (typeof input === 'number') {
    return new BN(input);
  }
  if (BN.isBN(input)) {
    return input;
  } else {
    throw Error('unsupported value conversion');
  }
};

const Wei = (input: string | BN): Wei => handleValues(input);

export { Wei, handleValues };
