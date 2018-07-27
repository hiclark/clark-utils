// @flow

const expireAllCookies = () =>
  document.cookie.split(';').forEach(c => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
  });

export const set = (key: string, value: {}) =>
  localStorage.setItem(key, JSON.stringify(value));

export const clear = (key: string) => {
  expireAllCookies();
  localStorage.removeItem(key);
};

type GetType = {};
export const get = (key: string): ?GetType => {
  const jsonString = localStorage.getItem(key);
  let parsedJson = null;

  if (jsonString) {
    try {
      parsedJson = JSON.parse(jsonString);
    } catch (e) {
      clear(key);
    }
  }
  return parsedJson;
};

export const append = (key: string, value: {}) => {
  const json = get(key);
  if (json) {
    const newObject = { ...json, ...value };
    set(key, newObject);
  }
};
