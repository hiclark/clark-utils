// @flow

import moment from 'moment';
import { formatTime, formatTimeWithPeriod, combinedDateAndTime } from './time';

describe('formatTime', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 1, output: '1 hour' },
      { input: 1.05, output: '1 hour and 3 minutes' },
      { input: 1.25, output: '1 hour and 15 minutes' },
      { input: 1.5, output: '1 hour and 30 minutes' },
      { input: 1.75, output: '1 hour and 45 minutes' },
      { input: 2, output: '2 hours' },
      { input: 2.25, output: '2 hours and 15 minutes' },
      { input: 2.5, output: '2 hours and 30 minutes' },
      { input: 2.75, output: '2 hours and 45 minutes' },
    ];

    testValues.forEach(testValue =>
      expect(formatTime(testValue.input)).toEqual(testValue.output),
    );
  });
});

describe('formatTimeWithPeriod', () => {
  it('returns time with period', () => {
    expect(formatTimeWithPeriod('1:00', 'pm')).toEqual('1:00 pm');
  });
});

describe('combinedDateAndTime', () => {
  it('returns formatted date and time', () => {
    const date = moment('2018-06-27T05:00:00.000');
    const time = moment('7:00 pm', 'HH:mm');

    const formattedDate = date.add(2, 'hours').format();

    expect(combinedDateAndTime(date, time)).toEqual(formattedDate);
  });
});
