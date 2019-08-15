const initState = {
  theme: 0,
  content: '<h1>Theme Tester</h1>',
  status: 'startup'
};

export default (state = initState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};