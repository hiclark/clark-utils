// @flow

import moment from 'moment';

export const calculateUserAge = (
  birthday: string,
  now?: moment = moment(),
): number => now.diff(moment(birthday), 'years');
