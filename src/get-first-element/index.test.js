// @flow
import { getFirstElement } from './';

describe('getFirstElement', () => {
  describe('when object is empty', () => {
    it('returns the expected result', () => {
      expect(getFirstElement({})).toEqual(undefined);
    });
  });

  describe('when object has values', () => {
    it('returns the expected result', () => {
      expect(getFirstElement({ a: 'foo', b: 'baz', c: 'bar' })).toEqual('foo');
    });
  });
});
