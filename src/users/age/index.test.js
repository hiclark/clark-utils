// @flow

import moment from 'moment';
import { calculateUserAge } from './index';

const now = moment('2018-04-29');

const testValues = [
  {
    input: '1992-04-28',
    output: 26,
  },
  {
    input: '1992-04-29',
    output: 26,
  },
  {
    input: '1992-04-30',
    output: 25,
  },
];

describe('calculateUserAge', () => {
  it('returns the expected result', () => {
    testValues.forEach(({ input, output }) =>
      expect(calculateUserAge(input, now)).toEqual(output),
    );
  });
});
