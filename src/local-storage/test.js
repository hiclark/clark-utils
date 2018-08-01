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

  const localStorageGetHelper = () => {
    const jsonString = localStorage.getItem(keyName);
    let parsedJson = null;

    if (jsonString) {
      try {
        parsedJson = JSON.parse(jsonString);
      } catch (e) {
        console.log(e);
      }
    }
    return parsedJson;
  };

  beforeAll(() => {
    const localStorageMock = () => {
      const store = {};
      return {
        getItem: key => store[key] || null,
        setItem: (key, value) => {
          store[key] = value;
        },
        removeItem: key => {
          store[key] = null;
        },
      };
    };
    global.localStorage = localStorageMock();
  });

  beforeEach(() => {
    localStorage.removeItem(keyName);
  });

  it('can localStorageSet() the correct key and value', () => {
    localStorageSet(keyName, keyValueOne);
    const expected = localStorageGetHelper();
    expect(expected).toEqual(keyValueOne);
  });

  it('can localStorageGet() the correct value when no key/value is set', () => {
    expect(localStorage.getItem(keyName)).toEqual(null);
  });

  describe('after localStorageSet() is called', () => {
    it('can localStorageGet() the correct value by key', () => {
      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      expect(localStorageGet(keyName)).toEqual(keyValueOne);
    });

    it('can localStorageAppend() the correct value by key', () => {
      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      localStorageAppend(keyName, keyValueTwo);

      const result = { ...keyValueOne, ...keyValueTwo };
      const expected = localStorageGetHelper();
      expect(expected).toEqual(result);
    });

    it('can localStorageClear() the value(s) by key', () => {
      localStorage.setItem(keyName, JSON.stringify(keyValueOne));
      localStorageClear(keyName);
      expect(localStorage.getItem(keyName)).toEqual(null);
    });
  });
});
