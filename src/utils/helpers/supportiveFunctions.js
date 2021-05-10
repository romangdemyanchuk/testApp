export const redirect = (path, history) => history.push(path)
export const getFromStorage = (key) => localStorage.getItem(key);
export const setToStorage = (key, value) => localStorage.setItem(key, value);
export const splitUrl = (url) => url.split('/')[url.split('/').length - 2]
