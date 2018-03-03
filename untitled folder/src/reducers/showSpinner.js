export default (state = false, action) => {
  switch (action.type) {
    case 'SET_SHOW_SPINNER':
      return true;
    case 'SET_HIDE_SPINNER':
      return false;
    default:
      return state;
  }
};