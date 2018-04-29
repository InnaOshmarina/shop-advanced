export const jsonParse = data => {
  return JSON.parse(data);
};

export const jsonStringify = data => {
  return JSON.stringify(data);
};

export const getItemStorage = key => {
  return window.localStorage.getItem(key);
};

export const removeItemStorage = key => {
  window.localStorage.removeItem(key);
};

export const setItemStorage = (key, data) => {
  window.localStorage.setItem(key, jsonStringify(data));
};
