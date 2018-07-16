// @flow
import {
  centsToDollars,
  dollarsToCents,
  formatCentsToDollars,
  formatDollars,
  formatDollarsPerHour,
} from './';

describe('centsToDollars', () => {
  describe('', () => {
    it('returns the expected result', () => {
      const testValues = [
        { input: 167, output: 1.67 },
        { input: 568.7, output: 5.69 },
        { input: 34000, output: 340 },
        { input: 87353.12, output: 873.53 },
        { input: '4562.51', output: 45.63 },
        { input: '9328.19747', output: 93.28 },
        { input: 50.5678, output: 0.51 },
        { input: 0.5678, output: 0.01 },
        { input: 0.56, output: 0.01 },
        { input: 0.57, output: 0.01 },
      ];

      testValues.forEach(testValue =>
        expect(centsToDollars(testValue.input)).toEqual(testValue.output),
      );
    });
  });
});

describe('dollarsToCents', () => {
  describe('', () => {
    it('returns the expected result', () => {
      const testValues = [
        { input: 76.8, output: 7680.0 },
        { input: '87.34', output: 8734 },
        { input: '$4562.51', output: 456251 },
        { input: 0.56, output: 56 }, // 0.56 * 100 = 56.00000000000001
        { input: 0.57, output: 57 }, // 0.57 * 100 = 56.99999999999999
      ];

      testValues.forEach(testValue =>
        expect(dollarsToCents(testValue.input)).toEqual(testValue.output),
      );
    });
  });
});

describe('formatCentsToDollars', () => {
  describe('', () => {
    it('returns the expected result', () => {
      const testValues = [
        { input: 167, output: '$1.67' },
        { input: 568.7, output: '$5.69' },
        { input: 34000, output: '$340.00' },
        { input: 87353.12, output: '$873.53' },
        { input: '4562.51', output: '$45.63' },
        { input: '9328.19747', output: '$93.28' },
        { input: 5.678, output: '$0.06' },
        { input: 0.5678, output: '$0.01' },
      ];

      testValues.forEach(testValue =>
        expect(formatCentsToDollars(testValue.input)).toEqual(testValue.output),
      );
    });
  });
});

describe('formatDollars', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 0.05, output: '$0.05' },
      { input: 0.63, output: '$0.63' },
      { input: 1, output: '$1.00' },
      { input: 1.05, output: '$1.05' },
      { input: 1.25, output: '$1.25' },
      { input: 1.5, output: '$1.50' },
      { input: 1.75, output: '$1.75' },
      { input: 2, output: '$2.00' },
      { input: 2.25, output: '$2.25' },
      { input: 2.5, output: '$2.50' },
      { input: 2.75, output: '$2.75' },
    ];

    testValues.forEach(testValue =>
      expect(formatDollars(testValue.input)).toEqual(testValue.output),
    );
  });
});

describe('formatRate', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 0.05, output: '$0.05/hr' },
      { input: 0.63, output: '$0.63/hr' },
      { input: 1, output: '$1.00/hr' },
      { input: 1.05, output: '$1.05/hr' },
      { input: 1.25, output: '$1.25/hr' },
      { input: 1.5, output: '$1.50/hr' },
      { input: 1.75, output: '$1.75/hr' },
      { input: 2, output: '$2.00/hr' },
      { input: 2.25, output: '$2.25/hr' },
      { input: 2.5, output: '$2.50/hr' },
      { input: 2.75, output: '$2.75/hr' },
    ];

    testValues.forEach(testValue =>
      expect(formatDollarsPerHour(testValue.input)).toEqual(testValue.output),
    );
  });
});
