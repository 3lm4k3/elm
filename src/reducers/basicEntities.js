export default (state = {}, action) => {
  switch(action.type) {
    case "SET_BASIC_ENTITIES": 
      return action.entities
    case "REMOVE_BASIC_ENTITIES": 
      return {}
    default: 
    return state
  }
}