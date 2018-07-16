// @flow

export const getFirstElement = (object: Object): any =>
  object[Object.keys(object)[0]];
