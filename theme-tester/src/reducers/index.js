const initState = {
  theme: 0,
  content: '<h1>Theme Tester</h1>',
  status: 'startup'
};

export default (state = initState, action) => {
  switch(action.type) {
    case 'SET_THEME':
      return {...state, theme: action.payload};
    default:
      return state;
  }
};