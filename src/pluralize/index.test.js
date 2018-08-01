// @flow

import { pluralize, pluralizeWithCount } from './index';

const counts = [0, 0.1, -4, 10, 12, 1.4];

describe('pluralize', () => {
  describe('when count is 1', () => {
    describe('with plural', () => {
      it('returns the expected result', () => {
        expect(pluralize(1, 'goose', 'geese')).toEqual('goose');
      });
    });

    describe('without plural', () => {
      it('returns the expected result', () => {
        expect(pluralize(1, 'test')).toEqual('test');
      });
    });
  });

  describe('when count is not 1', () => {
    describe('with plural', () => {
      it('returns the expected result', () => {
        counts.forEach(count =>
          expect(pluralize(count, 'goose', 'geese')).toEqual('geese'),
        );
      });
    });

    describe('without plural', () => {
      it('returns the expected result', () => {
        counts.forEach(count =>
          expect(pluralize(count, 'test')).toEqual('tests'),
        );
      });
    });
  });
});

describe('pluralizeWithCount', () => {
  describe('when count is 1', () => {
    describe('with plural', () => {
      it('returns the expected result', () => {
        expect(pluralizeWithCount(1, 'goose', 'geese')).toEqual('1 goose');
      });
    });

    describe('without plural', () => {
      it('returns the expected result', () => {
        expect(pluralizeWithCount(1, 'test')).toEqual('1 test');
      });
    });
  });

  describe('when count is not 1', () => {
    describe('with plural', () => {
      it('returns the expected result', () => {
        counts.forEach(count =>
          expect(pluralizeWithCount(count, 'goose', 'geese')).toEqual(
            `${count} geese`,
          ),
        );
      });
    });

    describe('without plural', () => {
      it('returns the expected result', () => {
        counts.forEach(count =>
          expect(pluralizeWithCount(count, 'test')).toEqual(`${count} tests`),
        );
      });
    });
  });
});
