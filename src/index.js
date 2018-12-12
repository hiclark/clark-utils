// @flow

export {
  centsToDollars,
  dollarsToCents,
  formatCentsToDollars,
  formatDollars,
  formatDollarsPerHour,
} from './currency';

export { isToday, isPastDate, isFutureDate, isInDateRange } from './dates';

export { getFirstElement } from './get-first-element';

export { loadDynamicScript } from './load-dynamic-script';

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
  minutesToHours,
  hoursToMinutes,
  formatMinutesToHours,
  formatHoursToMinutes,
} from './time';

export { calculateUserAge } from './users/age';

export { getInitials, getFullName, makePossessive } from './users/name';

export { removeFirstInstance } from './remove-first-instance';

export { serializePromises } from './serialize-promises';
