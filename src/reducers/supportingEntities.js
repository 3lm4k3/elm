export default (state = {}, action) => {
  switch(action.type) {
    case "SET_SUPPORTING_ENTITIES": 
      return action.entities
    case "REMOVE_SUPPORTING_ENTITIES": 
      return {}
    default: 
    return state
  }
}