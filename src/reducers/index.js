import { combineReducers } from 'redux';
import notes from './notes';
import note from './note';


const rootReducer = combineReducers({
	notes,
	note
});

export default rootReducer;