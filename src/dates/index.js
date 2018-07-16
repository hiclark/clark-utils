// @flow

import moment from 'moment';

export const isToday = (date: string, now: moment = moment()) =>
  now.isSame(date, 'day');

export const isPastDate = (date: string, now: moment = moment()) =>
  now.isAfter(moment(date), 'day');

export const isFutureDate = (date: string, now: moment = moment()) =>
  now.isBefore(moment(date), 'day');

export const isInDateRange = (startDate: moment, endDate: moment) => (
  date: string,
): boolean => moment(date).isBetween(startDate, endDate, 'day', '[]');
