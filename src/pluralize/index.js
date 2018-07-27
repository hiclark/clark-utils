// @flow

export const pluralize = (count: number, string: string, plural?: string) =>
  count === 1 ? string : plural || `${string}s`;

export const pluralizeWithCount = (
  count: number,
  string: string,
  plural?: string,
) => `${count} ${pluralize(count, string, plural)}`;
