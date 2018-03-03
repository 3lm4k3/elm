import { combineReducers } from 'redux';
import TagReducer from './TagReducer';
import SelectionReducer from './SelectionReducer';
import showSpinner from "./showSpinner"

export default combineReducers({
	tags: TagReducer,
	selectedTagId: SelectionReducer,
	showSpinner
});