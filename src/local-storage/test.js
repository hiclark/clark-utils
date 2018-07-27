// @flow

import {
  localStorageGet,
  localStorageSet,
  localStorageClear,
  localStorageAppend,
} from './';

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

  describe('after localStorageSet() is called', () => {
    it('can localStorageGet() the correct key and value', () => {
      localStorageSet(keyName, keyValueOne);
      expect(localStorageGet(keyName)).toEqual(keyValueOne);
    });

    it('can localStorageAppend() the correct key and value', () => {
      const result = { ...keyValueOne, ...keyValueTwo };

      localStorageSet(keyName, keyValueOne);
      localStorageAppend(keyName, keyValueTwo);
      expect(localStorageGet(keyName)).toEqual(result);
    });

    it('can localStorageClear() the correct key and value', () => {
      localStorageSet(keyName, keyValueOne);
      localStorageClear(keyName);
      expect(localStorageGet(keyName)).toEqual(null);
    });

    it('can not localStorageGet() if nothing is localStorageSet()', () => {
      localStorageGet(keyName);
      expect(localStorageGet(keyName)).toEqual(null);
    });
  });
});
