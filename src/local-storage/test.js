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
    const localStorageMock = () => {
      let store = {};
      return {
        getItem: key => store[key] || null,
        setItem: (key, value) => {
          store[key] = value;
        },
        removeItem: () => {
          store = {};
        },
      };
    };
    global.localStorage = localStorageMock();
  });

  it('can localStorageSet() the correct key and value', () => {
    localStorageSet(keyName, keyValueOne);
    const value = localStorage.getItem(keyName);
    const expected = JSON.parse(value);
    expect(expected).toEqual(keyValueOne);
  });

  describe('after localStorageSet() is called', () => {
    it('can localStorageGet() the correct value by key', () => {
      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      expect(localStorageGet(keyName)).toEqual(keyValueOne);
    });

    it('can localStorageAppend() the correct value by key', () => {
      const result = { ...keyValueOne, ...keyValueTwo };

      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      localStorageAppend(keyName, keyValueTwo);

      const value = localStorage.getItem(keyName);
      const expected = JSON.parse(value);

      expect(expected).toEqual(result);
    });

    it('can localStorageClear() the value(s) by key', () => {
      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      localStorageClear(keyName);
      expect(localStorage.getItem(keyName)).toEqual(null);
    });
  });
});
