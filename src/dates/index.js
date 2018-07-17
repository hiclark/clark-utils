// @flow

import moment from 'moment';

export const isToday = (date: string | moment, now: moment = moment()) =>
  now.isSame(moment(date), 'day');

export const isPastDate = (date: string | moment, now: moment = moment()) =>
  now.isAfter(moment(date), 'day');

export const isFutureDate = (date: string | moment, now: moment = moment()) =>
  now.isBefore(moment(date), 'day');

export const isInDateRange = (
  startDate: string | moment,
  endDate: string | moment,
) => (date: string): boolean =>
  moment(date).isBetween(moment(startDate), moment(endDate), 'day', '[]');
