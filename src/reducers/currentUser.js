export default (state = {}, action) => {
  switch(action.type) {
    case "SET_CURRENT_USER": 
      return action.user
    case "LOGOUT":
      return {}
    default: 
    return state
  }
}