// @flow

import moment from 'moment';
import {
  formatTime,
  formatTimeWithPeriod,
  combinedDateAndTime,
  hoursToMinutes,
  minutesToHours,
  castNumberToHoursType,
  castNumberToMinutesType,
} from './';

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
      expect(formatTime(castNumberToHoursType(testValue.input))).toEqual(
        testValue.output,
      ),
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

describe('hoursToMinutes', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 1, output: 60 },
      { input: 1.05, output: 63 },
      { input: 1.25, output: 75 },
      { input: 1.5, output: 90 },
      { input: 1.75, output: 105 },
      { input: 2, output: 120 },
      { input: 2.25, output: 135 },
      { input: 2.5, output: 150 },
      { input: 2.75, output: 165 },
    ];

    testValues.forEach(testValue =>
      expect(hoursToMinutes(castNumberToHoursType(testValue.input))).toEqual(
        testValue.output,
      ),
    );
  });
});

describe('minutesToHours', () => {
  it('returns the expected result', () => {
    const testValues = [
      { input: 60, output: 1 },
      { input: 63, output: 1.05 },
      { input: 75, output: 1.25 },
      { input: 90, output: 1.5 },
      { input: 105, output: 1.75 },
      { input: 120, output: 2 },
      { input: 135, output: 2.25 },
      { input: 150, output: 2.5 },
      { input: 165, output: 2.75 },
    ];

    testValues.forEach(testValue =>
      expect(minutesToHours(castNumberToMinutesType(testValue.input))).toEqual(
        testValue.output,
      ),
    );
  });
});
