// @flow

import moment from 'moment';

export const isToday = (date: string, now: moment = moment()) =>
  now.isSame(date, 'day');

export const isPast = (date: string, now: moment = moment()) =>
  now.isAfter(moment(date).startOf('day'));

export const isFuture = (date: string, now: moment = moment()) =>
  now.isBefore(moment(date).startOf('day'));

export const isInRange = (startDate: moment, endDate: moment) => (
  date: string,
): boolean => moment(date).isBetween(startDate, endDate);
