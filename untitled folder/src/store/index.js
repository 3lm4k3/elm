import * as redux from "redux"
import thunk from "redux-thunk"
import reducer from "../reducers/index"

export let configure = (initState = {})=>{

  return redux.createStore(reducer, initState, redux.applyMiddleware(thunk))

}
