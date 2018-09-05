// @flow

import {
  roundToXDecimalPlaces,
  roundToZeroDecimalPlaces,
  roundToTwoDecimalPlaces,
} from './index';

const roundToXTestValues = [
  {
    number: 123456789.123456789,
    places: 0,
    output: 123456789,
  },
  {
    number: 123456789.123456789,
    places: 2,
    output: 123456789.12,
  },
  {
    number: 123456789.123456789,
    places: 3,
    output: 123456789.123,
  },
  {
    number: 123456789.123456789,
    places: 4,
    output: 123456789.1235,
  },
  {
    number: 123456789.123456789,
    places: 5,
    output: 123456789.12346,
  },
  {
    number: 123456789.123456789,
    places: 6,
    output: 123456789.123457,
  },
  {
    number: 123456789.123456789,
    places: 7,
    output: 123456789.1234568,
  },
  {
    number: 123456789.123456789,
    places: 8,
    output: 123456789.12345679,
  },
  {
    number: 123456789.123456789,
    places: 9,
    output: 123456789.123456789,
  },
];

describe('roundToZeroDecimalPlaces', () => {
  it('returns the expected result', () => {
    roundToXTestValues.forEach(({ number, places, output }) =>
      expect(roundToXDecimalPlaces(places, number)).toEqual(output),
    );
  });
});

const roundToZeroTestValues = [
  {
    input: 120,
    output: 120,
  },
  {
    input: 12345,
    output: 12345,
  },
  {
    input: 0,
    output: 0,
  },
  {
    input: 1,
    output: 1,
  },
  {
    input: -1,
    output: -1,
  },
  {
    input: 12,
    output: 12,
  },
  {
    input: 12.12,
    output: 12,
  },
  {
    input: 12.823,
    output: 13,
  },
  {
    input: -12.123,
    output: -12,
  },
  {
    input: 12.925,
    output: 13,
  },
  {
    input: -12.925,
    output: -13,
  },
  {
    input: 12.123242142141241231321321241412341231231231232,
    output: 12,
  },
  {
    input: -12.823242142141241231321321241412341231231231232,
    output: -13,
  },
];

describe('roundToZeroDecimalPlaces', () => {
  it('returns the expected result', () => {
    roundToZeroTestValues.forEach(({ input, output }) =>
      expect(roundToZeroDecimalPlaces(input)).toEqual(output),
    );
  });
});

const roundToTwoTestValues = [
  {
    input: 120,
    output: 120,
  },
  {
    input: 12345,
    output: 12345,
  },
  {
    input: 0,
    output: 0,
  },
  {
    input: 1,
    output: 1,
  },
  {
    input: -1,
    output: -1,
  },
  {
    input: 12,
    output: 12,
  },
  {
    input: 12.12,
    output: 12.12,
  },
  {
    input: 12.123,
    output: 12.12,
  },
  {
    input: -12.123,
    output: -12.12,
  },
  {
    input: 12.125,
    output: 12.13,
  },
  {
    input: -12.125,
    output: -12.13,
  },
  {
    input: 12.123242142141241231321321241412341231231231232,
    output: 12.12,
  },
  {
    input: -12.123242142141241231321321241412341231231231232,
    output: -12.12,
  },
];

describe('roundToTwoDecimalPlaces', () => {
  it('returns the expected result', () => {
    roundToTwoTestValues.forEach(({ input, output }) =>
      expect(roundToTwoDecimalPlaces(input)).toEqual(output),
    );
  });
});
