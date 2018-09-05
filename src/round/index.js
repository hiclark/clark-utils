// @flow

export const roundToXDecimalPlaces = (
  numberOfPlaces: number,
  n: number,
): number => Number(n.toFixed(numberOfPlaces));

export const roundToZeroDecimalPlaces = (n: number) =>
  roundToXDecimalPlaces(0, n);

export const roundToTwoDecimalPlaces = (n: number) =>
  roundToXDecimalPlaces(2, n);
