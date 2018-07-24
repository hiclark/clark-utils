// @flow

import { getInitials, getFullName, makePossessive } from './';

describe('makePosessive', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 'Willis', output: "Willis'" },
      { input: 'Willis Plummer', output: "Willis Plummer's" },
      { input: 'Ian', output: "Ian's" },
      { input: 'Ian Solano', output: "Ian Solano's" },
      { input: 'Rick', output: "Rick's" },
      { input: 'Rick James', output: "Rick James'" },
    ];

    testValues.forEach(testValue =>
      expect(makePossessive(testValue.input)).toEqual(testValue.output),
    );
  });
});

describe('getFullName', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: { firstName: 'Willis' }, output: 'Willis' },
      {
        input: { firstName: 'Willis', lastName: 'Plummer' },
        output: 'Willis Plummer',
      },
      { input: {}, output: '' },
    ];

    testValues.forEach(testValue =>
      expect(getFullName(testValue.input)).toEqual(testValue.output),
    );
  });
});

describe('getInitials', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: { firstName: 'Willis' }, output: 'W' },
      {
        input: { firstName: 'Willis', lastName: 'Plummer' },
        output: 'WP',
      },
      { input: {}, output: '' },
    ];

    testValues.forEach(testValue =>
      expect(getInitials(testValue.input)).toEqual(testValue.output),
    );
  });
});
