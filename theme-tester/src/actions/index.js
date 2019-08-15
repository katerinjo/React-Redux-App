export const setTheme = (theme) => {
  return {
    type: 'SET_THEME',
    payload: theme
  };
};

export const refresh = () => {
  return {
    type: 'REFRESH'
  };
};