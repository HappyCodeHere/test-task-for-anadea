import * as types from '../actions/types';

const initialState = {
	title: '',
	description: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case types.LOAD_NOTE_START:
			return {...action.payload};

		case types.LOAD_NOTE_SUCCESS:
			return {...action.payload};

		case types.LOAD_NOTE_ERROR:
			return {...action.payload};

		default:
            return state;
	}
}