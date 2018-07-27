// @flow

import { get, set, clear, append } from './';

describe('localStorage', () => {
  const keyName = 'TEST_KEY';
  const keyValueOne = { isTest: true, status: 'test' };
  const keyValueTwo = { firstName: 'Tester', lastName: 'Account' };

  beforeAll(() => {
    let store = {};
    const localStorageMock = () => ({
      getItem: key => store[key] || null,
      setItem: (key, value) => {
        store[key] = value;
      },
      removeItem: () => {
        store = {};
      },
    });
    global.localStorage = localStorageMock();
  });

  describe('after set() is called', () => {
    it('can get() the correct key and value', () => {
      set(keyName, keyValueOne);
      expect(get(keyName)).toEqual(keyValueOne);
    });

    it('can append() the correct key and value', () => {
      const result = { ...keyValueOne, ...keyValueTwo };

      set(keyName, keyValueOne);
      append(keyName, keyValueTwo);
      expect(get(keyName)).toEqual(result);
    });

    it('can clear() the correct key and value', () => {
      set(keyName, keyValueOne);
      clear(keyName);
      expect(get(keyName)).toEqual(null);
    });

    it('can not get() if nothing is set()', () => {
      get(keyName);
      expect(get(keyName)).toEqual(null);
    });
  });
});
