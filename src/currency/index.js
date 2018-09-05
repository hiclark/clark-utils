// @flow
import Big from 'big.js';
import { roundToTwoDecimalPlaces, roundToZeroDecimalPlaces } from '../round';

const numberWithCommas = (number: number): string =>
  new Big(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const centsToDollars = (cents: number): number =>
  roundToTwoDecimalPlaces(new Big(cents / 100));

export const dollarsToCents = (dollars: number): number =>
  roundToZeroDecimalPlaces(new Big(dollars * 100));

export const formatCentsToDollars = (cents: number): string =>
  `$${numberWithCommas(centsToDollars(cents))}`;

export const formatDollars = (dollars: number): string =>
  `$${numberWithCommas(dollars)}`;

export const formatDollarsPerHour = (dollarsPerHour: number): string =>
  `${formatDollars(dollarsPerHour)}/hr`;
