// @flow
import moment from 'moment';
import { pluralizeWithCount } from '../pluralize';
import { roundToZeroDecimalPlaces, roundToTwoDecimalPlaces } from '../round';

export opaque type HoursType: number = number;
export opaque type MinutesType: number = number;

export const castNumberToHoursType = (x: number): HoursType => x;
export const castNumberToMinutesType = (x: number): MinutesType => x;

export const formatHours = (hours: HoursType): string =>
  pluralizeWithCount(hours, 'hour');

export const formatMinutes = (minutes: MinutesType): string =>
  pluralizeWithCount(minutes, 'minute');

export const formatTime = (hours: HoursType): string => {
  const minutes = hours * 60;
  const isHourInteger = Number.isInteger(hours);

  const integerInHours = Math.floor(hours);
  const decimalInMinutes = Math.round((hours % 1) * 60);

  if (isHourInteger) {
    return formatHours(hours);
  } else if (minutes > 60) {
    return `${formatHours(integerInHours)} and ${formatMinutes(
      decimalInMinutes,
    )}`;
  }

  return formatMinutes(minutes);
};

export const formatTimeWithPeriod = (time: string, period: string) =>
  `${time} ${period}`;

export const combinedDateAndTime = (date: moment, time: moment) =>
  moment(date)
    .hour(time.get('hour'))
    .minute(time.get('minute'))
    .format();

export const minutesToHours = (durationInMinutes: MinutesType): HoursType =>
  roundToTwoDecimalPlaces(durationInMinutes / 60);

export const hoursToMinutes = (durationInHours: HoursType): MinutesType =>
  roundToZeroDecimalPlaces(durationInHours * 60);

export const formatMinutesToHours = (durationInMinutes: MinutesType): string =>
  formatHours(minutesToHours(durationInMinutes));

export const formatHoursToMinutes = (durationInHours: HoursType): string =>
  formatMinutes(hoursToMinutes(durationInHours));
