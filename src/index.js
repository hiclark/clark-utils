// @flow

import type { HoursType as Hours, MinutesType as Minutes } from './time';

export type HoursType = Hours;
export type MinutesType = Minutes;

export {
  centsToDollars,
  dollarsToCents,
  formatCentsToDollars,
  formatDollars,
  formatDollarsPerHour,
} from './currency';

export { isToday, isPastDate, isFutureDate, isInDateRange } from './dates';

export { getFirstElement } from './get-first-element';

export {
  localStorageGet,
  localStorageSet,
  localStorageClear,
  localStorageAppend,
} from './local-storage';

export { pluralize, pluralizeWithCount } from './pluralize';

export {
  roundToXDecimalPlaces,
  roundToZeroDecimalPlaces,
  roundToTwoDecimalPlaces,
} from './round';

export {
  formatTime,
  formatHours,
  formatTimeWithPeriod,
  combinedDateAndTime,
  castNumberToHoursType,
  castNumberToMinutesType,
  minutesToHours,
  hoursToMinutes,
  formatMinutesToHours,
  formatHoursToMinutes,
} from './time';

export { calculateUserAge } from './users/age';

export { getInitials, getFullName, makePossessive } from './users/name';

export { removeFirstInstance } from './remove-first-instance';
