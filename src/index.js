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

export { pluralize, pluralizeWithCount } from './pluralize';

export {
  localStorageGet,
  localStorageSet,
  localStorageClear,
  localStorageAppend,
} from './local-storage';

export {
  formatTime,
  formatHours,
  formatTimeWithPeriod,
  combinedDateAndTime,
} from './time';

export { calculateUserAge } from './users/age';

export { getInitials, getFullName, makePossessive } from './users/name';
