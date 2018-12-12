// @flow

type AsyncFunctionType = () => Promise<any>;

export const serializePromises = (fns: AsyncFunctionType[]) =>
  fns.reduce(
    (promise, fn: AsyncFunctionType): Promise<any> => promise.then(fn),
    (Promise.resolve(): Promise<void>),
  );
