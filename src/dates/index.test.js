// @flow
import moment from 'moment';
import { isToday, isPastDate, isFutureDate, isInDateRange } from './';

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

describe('isPastDate', () => {
  describe('when date is present', () => {
    it('returns false', () => {
      expect(isPastDate('1969-12-31 08:30', now)).toEqual(false);
    });
  });

  describe('when date is tomorrow', () => {
    it('returns false', () => {
      expect(isPastDate('1970-01-31 14:20', now)).toEqual(false);
    });
  });

  describe('when date is yesterday', () => {
    it('returns true', () => {
      expect(isPastDate('1969-12-30 14:20', now)).toEqual(true);
    });
  });
});

describe('isFutureDate', () => {
  describe('when date is present', () => {
    it('returns false', () => {
      expect(isFutureDate('1969-12-31 08:30', now)).toEqual(false);
    });
  });

  describe('when date is tomorrow', () => {
    it('returns true', () => {
      expect(isFutureDate('1970-01-31 14:20', now)).toEqual(true);
    });
  });

  describe('when date is yesterday', () => {
    it('returns false', () => {
      expect(isFutureDate('1969-12-30 14:20', now)).toEqual(false);
    });
  });
});

describe('isInDateRange', () => {
  const startDateString = '1970-01-01 08:30';
  const endDateString = '1970-01-31 08:30';

  const startDate = moment(startDateString);
  const endDate = moment(endDateString);

  const funcWithStringRange = isInDateRange(startDateString, endDateString);
  const funcWithMomentRange = isInDateRange(startDate, endDate);

  describe('when date is in range', () => {
    it('returns true', () => {
      expect(funcWithStringRange('1970-01-14')).toEqual(true);
      expect(funcWithMomentRange('1970-01-14')).toEqual(true);
    });
  });

  describe('when date is start of range', () => {
    it('returns true', () => {
      expect(funcWithStringRange('1970-01-01 08:30')).toEqual(true);
      expect(funcWithMomentRange('1970-01-01 08:30')).toEqual(true);
    });
  });

  describe('when date is end of range', () => {
    it('returns true', () => {
      expect(funcWithStringRange('1970-01-31 08:30')).toEqual(true);
      expect(funcWithMomentRange('1970-01-31 08:30')).toEqual(true);
    });
  });

  describe('when date is before range', () => {
    it('returns false', () => {
      expect(funcWithStringRange('1969-12-31 14:20')).toEqual(false);
      expect(funcWithMomentRange('1969-12-31 14:20')).toEqual(false);
    });
  });

  describe('when date is after range', () => {
    it('returns false', () => {
      expect(funcWithStringRange('1970-02-01 08:30')).toEqual(false);
      expect(funcWithMomentRange('1970-02-01 08:30')).toEqual(false);
    });
  });
});
