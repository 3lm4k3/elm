import * as redux from "redux"
import thunk from "redux-thunk"
import reducer from "../reducers/index"
import logger from 'redux-logger'


export let configure = (initState = {})=>{

  return redux.createStore(reducer, initState, redux.applyMiddleware(...[thunk, logger]))

}
