export const redirect = (path, history) => history.push(path)
export const getFromStorage = (key) => localStorage.getItem(key);
export const setToStorage = (key, value) => localStorage.setItem(key, value);
