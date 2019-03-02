export const setLocalStorage = function(key, value) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
      return true;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getLocalStorage = function(key) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
