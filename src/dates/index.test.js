// @flow
import moment from 'moment';
import { isToday, isPast, isFuture, isInRange } from './';

const now = moment('1969-12-31 08:30');

describe('isToday', () => {
  describe('when date is today', () => {
    it('returns true', () => {
      expect(isToday('1969-12-31 14:20', now)).toEqual(true);
    });
  });

  describe('when date is tomorrow', () => {
    it('returns false', () => {
      expect(isToday('1970-01-31 14:20', now)).toEqual(false);
    });
  });

  describe('when date is yesterday', () => {
    it('returns false', () => {
      expect(isToday('1969-12-30 14:20', now)).toEqual(false);
    });
  });
});

describe('isPast', () => {
  describe('when date is present', () => {
    it('returns false', () => {
      expect(isPast('1969-12-31 08:30', now)).toEqual(true);
    });
  });

  describe('when date is tomorrow', () => {
    it('returns false', () => {
      expect(isPast('1970-01-31 14:20', now)).toEqual(false);
    });
  });

  describe('when date is yesterday', () => {
    it('returns true', () => {
      expect(isPast('1969-12-30 14:20', now)).toEqual(true);
    });
  });
});

describe('isFuture', () => {
  describe('when date is present', () => {
    it('returns false', () => {
      expect(isFuture('1969-12-31 08:30', now)).toEqual(false);
    });
  });

  describe('when date is tomorrow', () => {
    it('returns true', () => {
      expect(isFuture('1970-01-31 14:20', now)).toEqual(true);
    });
  });

  describe('when date is yesterday', () => {
    it('returns false', () => {
      expect(isFuture('1969-12-30 14:20', now)).toEqual(false);
    });
  });
});

describe('isInRange', () => {
  const startDate = moment('1970-01-01 08:30');
  const endDate = moment('1970-01-31 08:30');

  const funcWithRange = isInRange(startDate, endDate);

  describe('when date is in range', () => {
    it('returns true', () => {
      expect(funcWithRange('1970-01-14')).toEqual(true);
    });
  });

  describe('when date is start of range', () => {
    it('returns false', () => {
      expect(funcWithRange('1970-01-01 08:30')).toEqual(false);
    });
  });

  describe('when date is end of range', () => {
    it('returns false', () => {
      expect(funcWithRange('1970-01-31 08:30')).toEqual(false);
    });
  });

  describe('when date is before range', () => {
    it('returns false', () => {
      expect(funcWithRange('1969-12-31 14:20')).toEqual(false);
    });
  });

  describe('when date is after range', () => {
    it('returns false', () => {
      expect(funcWithRange('1970-02-01 08:30')).toEqual(false);
    });
  });
});
