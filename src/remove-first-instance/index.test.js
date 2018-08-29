// @flow

import removeFirstInstance from './index';

describe('removeFirstInstance', () => {
  const arr = ['a', 'b', 'c', 'd'];
  describe('when search term is not present', () => {
    it('returns the list', () => {
      expect(removeFirstInstance(arr, 'notThere')).toEqual(arr);
    });
  });

  describe('when search term is in middle of list', () => {
    it('returns the list without the term', () => {
      expect(removeFirstInstance(arr, 'c')).toEqual(['a', 'b', 'd']);
    });
  });

  describe('when search term is first item in the list', () => {
    it('returns the list without the term', () => {
      expect(removeFirstInstance(arr, 'a')).toEqual(['b', 'c', 'd']);
    });
  });

  describe('when search term is last item in the list', () => {
    it('returns the list without the term', () => {
      expect(removeFirstInstance(arr, 'd')).toEqual(['a', 'b', 'c']);
    });
  });

  describe('when there are multiple instances of the search term', () => {
    it('returns the list without the first instance', () => {
      expect(removeFirstInstance(arr.concat(arr), 'd')).toEqual([
        'a',
        'b',
        'c',
        'a',
        'b',
        'c',
        'd',
      ]);
    });
  });
});
