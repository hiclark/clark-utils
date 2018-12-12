// @flow

import { serializePromises } from './index';

describe('serializePromises', () => {
  const async = jest.fn(() => Promise.resolve('value'));

  const async1 = jest.fn(() => Promise.resolve('value1'));

  const async2 = jest.fn(() => Promise.resolve('Final Value'));

  const fns = [async, async1, async2];

  it('chains the promises', done => {
    serializePromises(fns).then(data => {
      expect(async).toBeCalledWith(undefined);
      expect(async1).toBeCalledWith('value');
      expect(async2).toBeCalledWith('value1');
      expect(data).toEqual('Final Value');
      done();
    });
  });
});
