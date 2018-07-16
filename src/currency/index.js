// @flow
import { Big } from 'big.js';

const numberWithCommas = (number: number): string =>
  new Big(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const centsToDollars = (cents: number): number =>
  Number(new Big(cents / 100).toFixed(2));

export const dollarsToCents = (dollars: string | number): number =>
  Number(new Big(Number(String(dollars).replace('$', '')) * 100).toFixed(0));

export const formatCentsToDollars = (cents: number): string =>
  String(cents).replace(
    String(cents),
    `$${numberWithCommas(centsToDollars(cents))}`,
  );

export const formatDollars = (dollars: number): string =>
  `$${numberWithCommas(dollars)}`;

export const formatDollarsPerHour = (dollarsPerHour: number): string =>
  `${formatDollars(dollarsPerHour)}/hr`;
