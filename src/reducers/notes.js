import * as types from '../actions/types';

const initialState = {
	title: '',
	description: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_NOTES_START:
			return {...action.payload};

		case types.FETCH_NOTES_SUCCESS:
			return {...action.payload};

		case types.FETCH_NOTES_ERROR:
			return {...action.payload};
			
		default:
            return state;
	}
}