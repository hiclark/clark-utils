// @flow
import Big from 'big.js';
import { roundToTwoDecimalPlaces, roundToZeroDecimalPlaces } from '../round';

const numberWithCommas = (number: number): string =>
  new Big(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const nullOrUndefined = (x: any): boolean => {
  return (typeof x === 'undefined') || x === null
}

export const centsToDollars = (cents: number): number => {
  return roundToTwoDecimalPlaces(new Big(cents / 100));
}

export const dollarsToCents = (dollars: number): number => {
  return roundToZeroDecimalPlaces(new Big(dollars * 100));
}

export const formatCentsToDollars = (cents: ?number): string => {
  if (nullOrUndefined(cents)) return '$—'
  return `$${numberWithCommas(centsToDollars(cents || 0))}`;
}

export const formatDollars = (dollars: ?number): string => {
  if (nullOrUndefined(dollars)) return '$—'
  return `$${numberWithCommas(dollars || 0)}`;
}

export const formatDollarsPerHour = (dollarsPerHour: number): string =>
  `${formatDollars(dollarsPerHour)}/hr`;
