// @flow

const expireAllCookies = () =>
  document.cookie.split(';').forEach(c => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
  });

export const localStorageSet = (key: string, value: {}) =>
  localStorage.setItem(key, JSON.stringify(value));

export const localStorageClear = (key: string) => {
  expireAllCookies();
  localStorage.removeItem(key);
};

export const localStorageGet = (key: string): ?Object => {
  const jsonString = localStorage.getItem(key);
  let parsedJson = null;

  if (jsonString) {
    try {
      parsedJson = JSON.parse(jsonString);
    } catch (e) {
      localStorageClear(key);
    }
  }
  return parsedJson;
};

export const localStorageAppend = (key: string, value: {}) => {
  const json = localStorageGet(key);
  if (json) {
    const newObject = { ...json, ...value };
    localStorageSet(key, newObject);
  }
};
