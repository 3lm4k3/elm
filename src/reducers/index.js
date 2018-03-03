import { combineReducers } from 'redux';
import TagReducer from './TagReducer';
import SelectionReducer from './SelectionReducer';
import showSpinner from "./showSpinner"
import basicEntities from "./basicEntities"
import supportingEntities from "./supportingEntities"
import currentUser from "./currentUser"

export default combineReducers({
	tags: TagReducer,
	selectedTagId: SelectionReducer,
	showSpinner,
	basicEntities,
	supportingEntities,
	currentUser
});